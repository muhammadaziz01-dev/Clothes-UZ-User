import { create } from "zustand";
import { toast } from "react-toastify";
import { product, StoreProduct } from "@product";

const useProductStore = create<StoreProduct>((set) => ({
  isLoader: false,
  data: [],
  dataCommit: [],
  totlCount: 0,
  getProduct: async (data) => {
    try {
      set({ isLoader: true });
      const respons = await product.get(data);
      //    console.log(respons)
      if (respons.status === 200) {
        set({ data: respons?.data?.products });
        set({ totlCount: respons?.data?.total_count });
      }
      set({ isLoader: false });
    } catch (error: any) {
      console.log(error);
      toast.error("Error : " + error?.message);
    }
  },

  getIdProduct: async (id) => {
    try {
      const respons = await product.getId(id);
      //    console.log(respons)
      if (respons.status === 200) {
        return respons.data;
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Error : " + error?.message);
    }
  },

  getProductCommit: async (params) => {
    // console.log(params);
    
    try {
      set({ isLoader: true });
      const respons = await product.getProductCommit(params);
      //    console.log(respons)
      if (respons.status === 200) {
        set({ dataCommit: respons?.data?.Comment });
      }
      set({ isLoader: false });
    } catch (error: any) {
      console.log(error);
      toast.error("Error : " + error?.message);
      set({ isLoader: false });
    }
  },

  postProductCommit: async (data) => {
    try {
      const respons = await product.postProductCommit(data);
         console.log(respons)
         return respons?.data
    } catch (error: any) {
      console.log(error);
      toast.error("Error : " + error?.message);
    }
  }
}));

export default useProductStore;
