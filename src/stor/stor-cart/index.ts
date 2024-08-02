
import { create } from 'zustand' ;
import { toast } from 'react-toastify'; 
import { cart ,StoreCart } from '@cart';


const useLikeCart = create <StoreCart> ((set)=>({
    isLoader: false,
    dataCart: [],
    totlCount: 0,
    getCart : async(id)=>{
        try{
           set({isLoader: true})
           const respons = await cart.getProductCart(id);
           console.log(respons)
           if(respons.status === 200){
               set({dataCart: respons?.data});
           }
           set({isLoader: false})
       }catch(error:any){
        console.log(error)
        toast.error("Error : " + error?.message);
        set({isLoader: false})
       }
       
    },


    postCart: async(data)=>{
        try{
           const respons = await cart.post(data)
           console.log(respons)
           if(respons?.status === 200){
               console.log(respons?.data);
               return respons?.data;
           }
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    }

}))

export default useLikeCart