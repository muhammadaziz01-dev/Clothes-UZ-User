import { useEffect, useState } from "react";

import useProductStore from "@stor-product"
import {Carusel , Card , GlobalPagination , Acardion} from "@ui"
import "./style.scss"

const index = () => {

  const {getProduct , data , totlCount} = useProductStore()
  const [params , setParams ] = useState({page:1 , limit:8}) 

  const totleCuont2 = Math.ceil(totlCount / params?.limit)


  // Function useEffect <--------------------------------------
  useEffect(()=>{
     getProduct(params)
  }, [params , setParams])
  useEffect(()=>{
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const pageNuber = page ? parseInt(page): 1;
    setParams(preParams=>({
       ...preParams,
        page:pageNuber
    }));
    
},[location.search]);
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


//--- pagination tett mui <----
const changePage = (value:number)=>{
  setParams(preParams=>({
      ...preParams,
      page:value
  }));
}
//=-=-=-=-=-=-=-=-=-=-=-=--=--=-=-
  

    return <>
      <div className="orginal-container">
        <Carusel/>

        <div className="py-5">
          <div className=" flex items-center justify-between">
            <h1 className=" text-[16px] md:text-[22px]  text-slate-500">Bizning Mahsulaotlar </h1>
            <GlobalPagination totleCuont={totleCuont2} page={params?.page} setParams={changePage}/>
          </div>
          <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {
              data?.map((el , index)=>{
                return <Card key={index}  data={el}/>
              })
            }
          </div>
        </div>

        <div className="py-5">
          <h1 className="text-[22px]  text-slate-500 mb-4 pb-1 border-b-2 ">Biz haqimizda </h1>
          <Acardion/>
        </div>


      </div>
    </>;
};

export default index;