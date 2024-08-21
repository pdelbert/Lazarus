import { wooCommerceAdd, wooCommerceDeleteById, wooCommerceFindAll, wooCommerceFindById, wooCommerceUpdateById } from "../services/WooCommerce.service";

const PATH = 'customers';

export const addCustomers = async(data:string) => {
    return await wooCommerceAdd(PATH, data);
}

export const searchCustomerById = async(id:string) => {
    return await wooCommerceFindById(PATH, id);
}

export const findAllCustomers = async() => {
    return await wooCommerceFindAll(PATH);
}

export const changeCustomersById = async(id:string, data:string) => {
    return await wooCommerceUpdateById(PATH, id, data);
}

export const removeCustomersById = async(id:string) => {
    return await wooCommerceDeleteById(PATH, id);
}
