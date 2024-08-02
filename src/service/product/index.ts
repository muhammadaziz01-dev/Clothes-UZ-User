import request from "../config"

// ----------------> Instance Product <-------------------------------------



interface getParams{
    page:number;
    limit:number;
    name?:string;
}

interface getCommit {
    page: number;
    limit: number;
    id:string|undefined;
}

interface PostCammit {
    message: string;
    productID: string|undefined;
}


interface Product{
    get : (params:getParams)=> any,
    getId : (id:string | undefined)=> any,
    getProductCommit : (params:getCommit)=> any,
    postProductCommit : (data:PostCammit)=> any,
}

// ---------> Interface Store Product <--------------------
export interface StoreProduct {
    isLoader:boolean;
    data:any[];
    dataCommit : any[];
    totlCount:number;
    getProduct: (params:getParams)=> Promise <any>;
    getIdProduct: (id:string | undefined)=> Promise <any>;
    getProductCommit: (params:getCommit)=> Promise <any>;
    postProductCommit: (data:PostCammit)=> Promise <any>;
}




// ----------------> Instance Product <----------------------------
export const product:Product = {
    get: (params)=> request.get(`/products`, {params}),
    getId: (id)=> request.get(`/product/${id}`),
    getProductCommit: (params)=> request.get(`/post/comments?page=${params.page}&limit=${params.limit}&id=${params.id}`),
    postProductCommit: (data)=> request.post(`/comment`, data),
}