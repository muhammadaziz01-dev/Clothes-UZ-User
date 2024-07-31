import request from "../config"

// ----------------> Instance Category <-------------------------------------



interface getParams{
    page:number;
    limit:number;
    name?:string;
}



interface Category{
    get : (params:getParams)=> any,
    getSearch : (params:getParams)=> any,
}

// ---------> Interface Store Product <--------------------
export interface StoreCategory {
    isLoader:boolean;
    categoryName:any[];
    categoryProduct:any[];
    totlCount:number;
    getCategoryName: (params:getParams)=> Promise <any>;
    getCategoryList: (params:getParams)=> Promise <any>;
}




// ----------------> Instance Product <----------------------------
export const category:Category = {
    get: (params)=> request.get(`/categories`, {params}),
    getSearch: (params)=> request.get(`/category/search?page=${params?.page}&limit=${params?.limit}&name=${params?.name}`),///category/search?page=1&limit=10&name=sitrofkalar
}