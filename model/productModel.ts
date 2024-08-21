import { ID_TEMPLATE, PRODUCTS_ENDPOINT } from "../constants/request";

import { 
    wooCommerceAdd, 
    wooCommerceFindAll, 
    wooCommerceFindById, 
    wooCommerceUpdateById 
} from "../services/WooCommerce.service";

const { BASE, VARIATION, ATTIBUTES, CATEGORIES } = PRODUCTS_ENDPOINT;


// PRODUCTS
export const getAllProducts = async() => {
    return await wooCommerceFindAll(BASE);
}

export const getProduct = async(id:string) => {
    return await wooCommerceFindById(BASE, id);
}

export const createProduct = async(data:string) => {
    return await wooCommerceAdd(BASE, data);
}

export const updateProduct = async(id:string, data:string) => {
    return await wooCommerceUpdateById(BASE, id, data);
}

// PRODUCTS VARIATION
export const productVariation = async(id:string, data:string) => {
    const PATH = VARIATION.replace(ID_TEMPLATE, id);
    return await wooCommerceAdd(PATH, data);
}

export const allProductsVariation = async(id:string) => {
    const PATH = VARIATION.replace(ID_TEMPLATE, id);
    return await wooCommerceFindAll(PATH);
}

// PRODUCTS ATTRIBUTES
export const productAttributes = async(data:string) => {
    return await wooCommerceAdd(ATTIBUTES, data);
}

export const allProductsAttributes = async() => {
    return await wooCommerceFindAll(ATTIBUTES);
}

export const findProductAttributeById = async(id:string) => {
    return await wooCommerceFindById(ATTIBUTES, id);
}

export const changeProductAttributeById = async(id:string, data:string) => {
    return await wooCommerceUpdateById(ATTIBUTES, id, data);
}

// PRODUCTS CATEGORIES
export const allProductCategories = async() => {
    return await wooCommerceFindAll(CATEGORIES);
}

export const findProductCategoriesById = async(id:string) => {
    return await wooCommerceFindById(CATEGORIES, id);
}

export const productCategories = async(data:string) => {
    return await wooCommerceAdd(CATEGORIES, data);
}

export const changeProductCategories = async(id:string, data:string) => {
    return await wooCommerceUpdateById(CATEGORIES, id, data);
}
