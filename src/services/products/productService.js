import client from "../client";
import {sweetAlert} from "../../utils";


export const getProducts = async () => {
    return await client.get('/api/v1/products/type');
}

export const showErrorMessage = (error) => {
    console.log(error)

    if (typeof error.details == 'undefined') {
        sweetAlert(error.toString(), {position: 'top-end', showConfirmButton: false });
        return;
    }

    let message = Array.isArray(error.details) ? `${error.details.join('\n')}` : `${error.details}`;
    sweetAlert(message.toString(), "error");
};