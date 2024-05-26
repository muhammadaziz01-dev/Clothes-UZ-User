import { useEffect, useState } from "react";

import useProductStore from "@stor-product"
import {Carusel , Card} from "@ui"
import "./style.scss"

const index = () => {

  const {getProduct , data} = useProductStore()
  const [params ] = useState({page:1 , limit:10}) 

  
  useEffect(()=>{
     getProduct(params)
  }, [params])

  console.log(data);
  

    return <>
      <div className="orginal-container">
        <Carusel/>
        <div className="py-5">
          <h1 className="text-[22px]  text-slate-500">Bizning Mahsulaotlar </h1>
          <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {
              data?.map((el)=>{
                return <Card key={el.product_id}  data={el}/>
              })
            }
          </div>
        </div>

      </div>
    </>;
};

export default index;