import { getProducts, showErrorMessage } from "../../../services/products/productService";
import { confirmedGetProductType } from "./productTypeSlice";


export const getProductsAction = () => {
    return async (dispatch) => {
        try {
            const response = await getProducts();

            dispatch(confirmedGetProductType(response.data));
        } catch (error) {
            showErrorMessage(error);
            dispatch(confirmedGetProductType([]))
        }
    };
}