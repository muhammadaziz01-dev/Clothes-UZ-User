import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

import { ProductInterface } from "@global-interface"
import "./style.scss";



const index = ( {key , data}:{key:number , data:ProductInterface}) => {
    console.log(key);
    const navigate = useNavigate()

    const navigetBtn = (id:string) => {
        navigate(`/product/${id}`);
    };



    return <>
    <div className=" border h-[405px] relative overflow-hidden group transition rounded-md hover:shadow-lg">
       <div className="w-full mx-auto flex items-center justify-center overflow-hidden ">
        <img src={data.image_url} alt={data.product_name} className="max-h-[260px] w-full  group-hover:scale-110 duration-300" />
        <div className=" absolute -top-5 -right-11 flex flex-col items-center group-hover:right-1  group-hover:top-1 duration-300">
        <IconButton aria-label="add to favorites" onClick={()=>{console.log(data.product_id)}} >
          <FavoriteIcon fontSize="medium"/>
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={()=>{navigetBtn(data?.product_id)}} >
          <VisibilityIcon fontSize="medium"/>
        </IconButton>
        </div>
       </div>
       <div className="pt-[8px] px-5">
         <h2 className=" text-center mb-[5px] cursor-pointer " onClick={()=>{navigetBtn(data?.product_id)}}>{data?.product_name?.length > 25 ? data?.product_name?.slice(0 , 17) + "..." : data?.product_name }</h2>
         <p> Made in : <span className="text-red-500">{data?.made_in}</span></p>
         <p> For gender : <span className="text-red-500">{data?.for_gender}</span></p>
         <del className=" text-gray-500 font-serif pl-12">{data?.cost} UZS</del> 
          <p>Narxi : <span className=" text-red-500"> {Math.ceil(data?.cost - (data?.cost / 100) * data?.discount)} UZS</span></p>
            <div className=" absolute -right-11 -bottom-5 group-hover:right-1 group-hover:bottom-1 duration-300">
              <IconButton aria-label="add to favorites"  >
                 <ShoppingCartIcon fontSize="medium"/>
              </IconButton>
            </div>
       </div>
    </div>

    </>;
};

export default index;