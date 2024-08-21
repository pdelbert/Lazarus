import fetch from 'cross-fetch';
import { Base64 } from 'js-base64';


export const  getAllUsers = async() => {
    const API_URL = `${process.env.BASE_URL_WORDPRESS}/users`;
    const username = process.env.WP_USER;
    const password = process.env.WP_PASSWORD;

    const options = {
        method: 'GET',
        headers: { 
            'Authorization': 'Basic ' + Base64.encode(username + ":" + password),
            'Content-Type': 'application/json' 
        },
    };
    
    const response = await fetch(API_URL, options);
    return response.json();
}

export const  getUser = async(id:string) => {
    const API_URL = `${process.env.BASE_URL_WORDPRESS}/users/${id}`;
    const username = process.env.WP_USER;
    const password = process.env.WP_PASSWORD;

    const options = {
        method: 'GET',
        headers: { 
            'Authorization': 'Basic ' + Base64.encode(username + ":" + password),
            'Content-Type': 'application/json' 
        },
    };
    
    const response = await fetch(API_URL, options);
    return response.json();
}

export const  createUser = async(body:string) => {
    const API_URL = `${process.env.BASE_URL_WORDPRESS}/users/`;
    
    const options = {
        method: 'POST',
        headers: { 
            'Authorization': 'Basic ' + Base64.encode(process.env.WP_USER + ":" + process.env.WP_PASSWORD),
            'Content-Type': 'application/json' 
        },
        body: body
    };
    
    const response = await fetch(API_URL, options);
    return response.json();
}

export const  updateUser = async(id:string, body:string) => {
    const API_URL = `${process.env.BASE_URL_WORDPRESS}/users/${id}`;
    
    const options = {
        method: 'POST',
        headers: { 
            'Authorization': 'Basic ' + Base64.encode(process.env.WP_USER + ":" + process.env.WP_PASSWORD),
            'Content-Type': 'application/json' 
        },
        body: body
    };
    
    const response = await fetch(API_URL, options);
    return response.json();
}