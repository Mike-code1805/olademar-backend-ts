
import { productModel } from "../../product/entity/model/productModel";
import { Product } from "../entity/types/Product";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";



export const updateProductService = async (
    productId: string,
    product: { 
        title?: string; 
        desc?: string; 
        img?: string;
        categories?: Array<string>;
        dimension: string;
        price: number;
    }
    ): Promise<Product | null | undefined > => {
    try {
        if (!productId) throw new Error(`No product id provided`);
        const editedProduct = await updateOneResourceById(productModel)(
            productId,
            product
        );
        return editedProduct
    } catch (error: any) {
        
    }
};