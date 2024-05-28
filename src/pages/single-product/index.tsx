import { useParams } from "react-router-dom"
import { useEffect , useState } from "react"

import useProductStore from "@stor-product";
import {SingleProductCard} from "@ui" 

function index() {
    const {getIdProduct} = useProductStore()
    const {id} = useParams()
 
    const [product, setProduct] = useState({})


    // product get <----------------------
  const getProduct = async () => {
    // setLoader(true);
    try {
      const data = await getIdProduct(id);
      setProduct(data);
    //   console.log(data);
    
    } catch (err) {
      console.log(err);
    }

    // setLoader(false);
  };
  //=-=-==-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    useEffect(() =>{
        getProduct()
    } ,[])

  
    
    

  return <>
   <div className="orginal-container">
    <div className="flex items-center justify-around pt-10">
        <SingleProductCard product={product} />
    </div>
   </div>
    </>
}

export default index