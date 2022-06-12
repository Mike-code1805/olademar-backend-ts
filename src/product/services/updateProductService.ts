
import { productModel } from "../../product/entity/model/productModel";
import { Product } from "../entity/types/Product";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";

export const updateProductService = async (
    productId: string,
    product: Object
    ): Promise<Product | null | undefined > => {
    try {
        
        const editedProduct = await updateOneResourceById(productModel)(
            productId,
            product
        );
        return editedProduct;
        
    } catch (error: any) {
        
    }
};