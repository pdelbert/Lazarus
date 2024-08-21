const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: process.env.BASE_URL_WOOCOMMERCE,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: 'wc/v3',
    queryStringAuth: true
});


export const wooCommerceAdd = async(PATH:string, data:string) => {
    const response = await WooCommerce.post(PATH, JSON.parse(data))
    .then((response:any) => {return response.data;})
    .catch((error:any) => { return error.response.data;});
    return response;
}

export const wooCommerceFindById = async(PATH:string, id:string) => {
    const response = await WooCommerce.get(`${PATH}/${id}`)
    .then((response:any) => {return response.data;})
    .catch((error:any) => { return error.response.data;});
    return response;
}

export const wooCommerceFindAll = async(PATH:string) => {
    const response = await WooCommerce.get(PATH)
    .then((response:any) => {return response.data;})
    .catch((error:any) => { return error.response.data;});
    return response;
}

export const wooCommerceUpdateById= async(PATH:string, id:string, data:string) => {
    const response = await WooCommerce.put(`${PATH}/${id}`, JSON.parse(data))
    .then((response:any) => {return response.data;})
    .catch((error:any) => { return error.response.data;});
    return response;
}

export const wooCommerceDeleteById = async(PATH:string, id:string) => {
    const response = await WooCommerce.delete(`${PATH}/${id}`, { force: true })
    .then((response:any) => {return response.data;})
    .catch((error:any) => { return error.response.data;});
    return response;
}