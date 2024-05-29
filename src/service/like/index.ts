
import request from "../config"

// ----------------> Instance Product <-------------------------------------
export interface PostData{
    age_max: number,
    age_min: number,
    category_id: string,
    color: boolean,
    cost: number,
    count: number,
    description: string,
    discount:number,
    for_gender: string,
    made_in: string,
    product_name: string,
    size: number
}

export interface ParamsData{
    page:number;
    limit:number;
}



interface Like{
    post: (id:string)=> any,
    getProductLike : (id:ParamsData)=> any,
}

// ---------> Interface Store Product <--------------------
export interface StoreLike {
    isLoader:boolean;
    data:any[];
    totlCount:number;
    getLikes: ()=> Promise <any>;
    postLike: (id:string)=> Promise <any>;
}




// ----------------> Instance Product <----------------------------
export const like:Like = {
    post: (id)=> request.post(`/like/${id}`,),
    getProductLike: (params)=> request.get(`/wishlist?page=${params.page}&limit=${params.limit}`),
}