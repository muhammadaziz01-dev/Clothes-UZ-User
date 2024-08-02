
import { create } from 'zustand' ;
import { toast } from 'react-toastify'; 
import { category ,StoreCategory } from '@category';


const useCategoryStore = create <StoreCategory> ((set)=>({
    isLoader: false,
    categoryName: [],
    categoryProduct: [],
    totlCount: 0,
    getCategoryName : async(params)=>{
        try{
           set({isLoader: true})
           const respons = await category.get(params)
        //    console.log(respons)
           if(respons.status === 200){
               set({categoryName: respons?.data?.categories});
               set({isLoader: false})
            //    set({totlCount: respons?.data?.total_count})
           }
           set({isLoader: false})
       }catch(error:any){
        console.log(error)
        toast.error("Error : " + error?.message);
        set({isLoader: false})
       }
       
    },

    getCategoryList: async(params)=>{
        // console.log(params);
        
        try{
            set({isLoader: true})
            const respons = await category.getSearch(params)
         //    console.log(respons)
            if(respons.status === 200){
                set({categoryProduct: respons?.data?.products});
                set({totlCount: respons?.data?.total_count})
            }
            set({isLoader: false})
        }catch(error:any){
         console.log(error)
         toast.error("Error : " + error?.message);
         set({isLoader: false})
        }
    }
    

}))

export default useCategoryStore