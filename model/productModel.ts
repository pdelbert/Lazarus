import { wooCommerceAdd, wooCommerceDeleteById, wooCommerceFindAll, wooCommerceFindById, wooCommerceUpdateById } from "../services/WooCommerce.service";

const PATH_PRODUCTS = 'products';
const PATH_PRODUCTS_ATTIBUTES = 'products/attributes'
const PATH_PRODUCTS_CATEGORIES = 'products/categories'
const PATH_PRODUCTS_VARIATION = 'products/{0}/variations'


// PRODUCTS
export const getAllProducts = async() => {
    return await wooCommerceFindAll(PATH_PRODUCTS);
}

export const getProduct = async(id:string) => {
    return await wooCommerceFindById(PATH_PRODUCTS, id);
}

export const createProduct = async(data:string) => {
    return await wooCommerceAdd(PATH_PRODUCTS, data);
}

export const updateProduct = async(id:string, data:string) => {
    return await wooCommerceUpdateById(PATH_PRODUCTS, id, data);
}

// PRODUCTS VARIATION
export const productVariation = async(id:string, data:string) => {
    const PATH = PATH_PRODUCTS_VARIATION.replace('{0}',id);
    return await wooCommerceAdd(PATH, data);
}

export const allProductsVariation = async(id:string) => {
    const PATH = PATH_PRODUCTS_VARIATION.replace('{0}',id);
    return await wooCommerceFindAll(PATH);
}

// PRODUCTS ATTRIBUTES
export const productAttributes = async(data:string) => {
    return await wooCommerceAdd(PATH_PRODUCTS_ATTIBUTES, data);
}

export const allProductsAttributes = async() => {
    return await wooCommerceFindAll(PATH_PRODUCTS_ATTIBUTES);
}

export const findProductAttributeById = async(id:string) => {
    return await wooCommerceFindById(PATH_PRODUCTS_ATTIBUTES, id);
}

export const changeProductAttributeById = async(id:string, data:string) => {
    return await wooCommerceUpdateById(PATH_PRODUCTS_ATTIBUTES, id, data);
}

// PRODUCTS CATEGORIES
export const allProductCategories = async() => {
    return await wooCommerceFindAll(PATH_PRODUCTS_CATEGORIES);
}

export const findProductCategoriesById = async(id:string) => {
    return await wooCommerceFindById(PATH_PRODUCTS_CATEGORIES, id);
}

export const productCategories = async(data:string) => {
    return await wooCommerceAdd(PATH_PRODUCTS_CATEGORIES, data);
}

export const changeProductCategories = async(id:string, data:string) => {
    return await wooCommerceUpdateById(PATH_PRODUCTS_CATEGORIES, id, data);
}
