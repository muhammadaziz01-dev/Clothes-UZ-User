import { useParams } from "react-router-dom"
import { useEffect , useState } from "react"

import useProductStore from "@stor-product";
import {SingleProductCard} from "@ui" 
import { ToastContainer } from "react-toastify";

function index() {
    const {getIdProduct} = useProductStore()
    const {id} = useParams()
 
    const [product, setProduct] = useState({})
    const [img, setImage] = useState([]);


    // product get <----------------------
  const getProduct = async () => {
    // setLoader(true);
    try {
      const data = await getIdProduct(id);
      setProduct(data);
      if(data?.image_url){
        setImage(data?.image_url.map((image:any) =>{
          return {
            original: image,
            thumbnail: image,
          };
        }))
      }
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
    <ToastContainer />
   <div className="orginal-container">
    <div className="flex items-center justify-around pt-10">
        <SingleProductCard product={product} imgs={img} />
    </div>
   </div>
    </>
}

export default index