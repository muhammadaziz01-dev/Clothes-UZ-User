
import request from "../config"

// ----------------> Instance Cart <-------------------------------------


export interface ParamsData{
    page:number;
    limit:number;
    id:string;
}

export interface PostCart {
    productId:string;
}



interface Cart{
    post: (id:PostCart)=> any,
    getProductCart : (id:string|undefined)=> any,
}

// ---------> Interface Store Cart <--------------------
export interface StoreCart {
    isLoader:boolean;
    dataCart:any[];
    totlCount:number;
    getCart: (id:string|undefined)=> Promise <any>;
    postCart: (data:PostCart)=> Promise <any>;
}




// ----------------> Instance Cart <----------------------------
export const cart:Cart = {
    post: (data)=> request.post(`/basket`, data),
    getProductCart: (id)=> request.get(`user-baskets?id=${id}`),///basket?page=1&limit=10&id=19d16003-586a-4190-92ee-ab0c45504023
}