import { logger } from '../../logger/appLoger';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { productModel } from '../../product/entity/model/productModel';
import { cartModel } from '../../cart/entity/model/cartModel';
import { CreateCart } from '../../cart/entity/types/Cart';

const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_MERCADOPAGO! });

export const createPreferenceService = async (cartRequest: CreateCart): Promise<string> => {
  try {
    const preference = new Preference(client);
    const productIds = cartRequest.items.map((product) => product.productId);

    const products = await productModel.find({ _id: { $in: productIds } });

    const totalPrice = products.reduce((total, product) => {
      const price = product.ofert ? product.ofert : product.price;
      const quantity = cartRequest.items.find((item) => item.productId === product.id)?.counter || 1;
      return total + price * quantity;
    }, 0);

    const FIXED_COST = 1.18; // Costo fijo de Mercado Pago
    const RATE = 0.0471; // Nueva tasa de Mercado Pago (3.99% + IGV)

    const calculateTotalToCharge = (amountToReceive: number) => {
      // Calcula el total a cobrar
      const totalToCharge = (amountToReceive + FIXED_COST) / (1 - RATE);
      return parseFloat(totalToCharge.toFixed(2)); // Redondear a dos decimales
    };

    const finalPrice = calculateTotalToCharge(totalPrice);
    const surchargeItem = {
      title: 'MERCADO PAGO',
      shortdescription: `Recargo por proceso de pago del 3.99% + IGV + 1,18 soles`,
    };

    const formattedTitlesAndDescriptions = [...products, surchargeItem]
      .map((product: { title: string; shortdescription: string }) => {
        const title = product.title.toUpperCase();
        const shortdescription = product.shortdescription;
        return `${title}: \n\n${shortdescription} \n`;
      })
      .join('\n\n');

    const cart = await cartModel.create(cartRequest);

    const response = await preference.create({
      body: {
        items: [
          {
            id: 'combined-products',
            title: `${formattedTitlesAndDescriptions}`,
            description: `Compra de múltiples productos.`,
            quantity: 1,
            unit_price: finalPrice,
            category_id: 'general',
          },
        ],
        back_urls: {
          success: `https://olademar-backend-ts-production.up.railway.app/api/cart/${cart._id}/success`,
          pending: `https://olademar-backend-ts-production.up.railway.app/api/cart/${cart._id}/success`,
          failure: `https://olademar-backend-ts-production.up.railway.app/api/cart/${cart._id}/cancelled`,
        },
        auto_return: 'approved',
        statement_descriptor: 'OlaDeMar',
        payment_methods: {
          installments: 1,
        },
      },
    });

    return response.id as string;
  } catch (error: any) {
    logger.error('error creating a cart service', {
      instance: 'services',
      service: 'createPreferenceService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a cart ${error.message}`);
  }
};
