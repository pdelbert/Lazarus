import express from "express";

import { 
    getAll, 
    findProduct, 
    createNewProduct, 
    updateExistingProduct, 
    createProductVariation,
    createProductAttributes,
    getAllProductAttributes,
    getProductAttributeById,
    updateProductAttributeById,
    createProductCategories,
    updateProductCategories,
    getAllProductCategories,
    getProductCategoriesById,
    getAllProductVariation,
} from "../../controller/productController";

const usersRoute = express.Router();


usersRoute.get('/', getAll);
usersRoute.post('/', createNewProduct);

usersRoute.get('/variations/:id', getAllProductVariation);
usersRoute.post('/variations/:id', createProductVariation);

usersRoute.get('/attribute', getAllProductAttributes);
usersRoute.post('/attribute', createProductAttributes);
usersRoute.get('/attribute/:id', getProductAttributeById);
usersRoute.post('/attribute/:id', updateProductAttributeById);

usersRoute.get('/categories', getAllProductCategories);
usersRoute.get('/categories/:id', getProductCategoriesById);
usersRoute.post('/categories', createProductCategories);
usersRoute.post('/categories/:id', updateProductCategories);

usersRoute.get('/:id', findProduct);
usersRoute.post('/:id', updateExistingProduct);


export default usersRoute;
