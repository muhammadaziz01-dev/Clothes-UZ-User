import request from "../config"

// ----------------> Instance Product <-------------------------------------



interface getParams{
    page:number;
    limit:number;
    name?:string;
}



interface Product{
    get : (params:getParams)=> any,
    getId : (id:string | undefined)=> any,
}

// ---------> Interface Store Product <--------------------
export interface StoreProduct {
    isLoader:boolean;
    data:any[];
    totlCount:number;
    getProduct: (params:getParams)=> Promise <any>;
    getIdProduct: (id:string | undefined)=> Promise <any>;
}




// ----------------> Instance Product <----------------------------
export const product:Product = {
    get: (params)=> request.get(`/products`, {params}),
    getId: (id)=> request.get(`/product/${id}`),
}