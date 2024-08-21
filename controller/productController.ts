import { Request, Response, NextFunction } from "express";
import {  
    getAllProducts, 
    getProduct, 
    createProduct, 
    updateProduct,
    productVariation, 
    productAttributes,
    findProductAttributeById,
    changeProductAttributeById,
    allProductsAttributes,
    productCategories,
    changeProductCategories,
    allProductCategories,
    findProductCategoriesById,
    allProductsVariation
} from "../model/productModel";

export const getAll = async(req:Request, res:Response, next:NextFunction) => {
    return res.json(await getAllProducts());
}

export const findProduct = async(req:Request, res:Response, next:NextFunction) => {
    return res.json(await getProduct(req.params.id));
}

export const createNewProduct = async(req:Request, res:Response, next:NextFunction) => {
    const paramsStringified = JSON.stringify(req.body);
    return res.json(await createProduct(paramsStringified));
}

export const updateExistingProduct = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await updateProduct(productId, bodyStringified));
}

// PRODUCT VARIATIONS
export const getAllProductVariation = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    return res.json(await allProductsVariation(productId));
}
export const createProductVariation = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await productVariation(productId, bodyStringified));
}

// PRODUCT ATTRIBUTE
export const createProductAttributes = async(req:Request, res:Response, next:NextFunction) => {
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await productAttributes(bodyStringified));
}

export const getAllProductAttributes = async(req:Request, res:Response, next:NextFunction) => {
    return res.json(await allProductsAttributes());
}

export const getProductAttributeById = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    return res.json(await findProductAttributeById(productId));
}

export const updateProductAttributeById = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await changeProductAttributeById(productId, bodyStringified));
}

// PRODUCT CATEGORIES
export const getAllProductCategories = async(req:Request, res:Response, next:NextFunction) => {
    return res.json(await allProductCategories());
}

export const getProductCategoriesById = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    return res.json(await findProductCategoriesById(productId));
}

export const createProductCategories = async(req:Request, res:Response, next:NextFunction) => {
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await productCategories(bodyStringified));
}

export const updateProductCategories = async(req:Request, res:Response, next:NextFunction) => {
    const productId = req.params.id;
    const bodyStringified = JSON.stringify(req.body);
    return res.json(await changeProductCategories(productId, bodyStringified));
}
