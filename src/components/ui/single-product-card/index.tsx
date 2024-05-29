
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {ProductInterface} from "@global-interface"
import { IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import ImageGallery from "react-image-gallery";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import useLikeStore from "@stor-like";
import {getCookies} from "@coocse"
import { useState } from 'react';
import "./style.scss"


function index({product , imgs } : {product:ProductInterface | any , imgs:any}) {
  const navigate = useNavigate();
  const {postLike} = useLikeStore();

  const [count , setCount] = useState(1);
  



   // function like ----------------------
   const btnLike = async(id:string) => {

    if(getCookies("user_id")){
       const like = await postLike(id)
       if(like == true) {
         toast.success("was included in the list")
       }else if(like == false) {
         toast.info("removed from the list")
       }
    }else{
      toast.info("Janob siz ro'yhatdan o'tmagansiz")
    }
    
  };
  
  return <>
    <div className="flex flex-col md:flex-row  items-start justify-between">
       <div className="max-w-[600px] max-h-[700px] w-full h-full ">
              <ImageGallery
                autoPlay={false}
                infinite={true}
                thumbnailPosition={"left"}
                showPlayButton={false}
                showFullscreenButton={true}
                items={imgs}
              />
         {/* <img  className=" max-h-[450px] w-full h-full" src={product?.image_url ? product?.image_url[0] : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"} alt={product?.product_name} /> */}
       </div>
       <div className="p-2 md:max-w-[330px] lg:max-w-[550px] w-full">
         <h1 className="text-center text-[22px]">{product?.product_name}</h1>
         <p className="py-3 text-gray-600">{product?.description}</p>
         <p className="flex items-center justify-between pb-[2px] border-b mb-2">Islab chiqarilgan joyi : <span className="text-red-500 pl-2"> {product?.made_in}</span></p>
         <p className="flex items-center justify-between pb-[2px] border-b mb-2 ">Mahsulot rangi : <span className=" text-gray-500 pl-2"> {product?.color}</span></p>
         <p className="flex items-center justify-between pb-[2px] border-b mb-2 ">Mahsulot o'lchami : <span className="text-red-500 pl-2"> {product?.size}</span></p>
         <p className="flex items-center justify-between pb-[2px] border-b mb-2 ">Mahsulot soni : <span className="text-red-500 pl-2">{product?.count} ta</span></p>
         <p className="flex items-center justify-between pb-[2px] border-b  mb-2 ">Chegirma ko'rsatgich : <span className="text-red-500 pl-2">{product?.discount} %</span> </p>
         <p className="flex items-center justify-between pb-[2px] border-b  mb-2 "> Kimlar uchun : <span className={product?.for_gender == "male" ? "text-gray-500 pl-2" : "text-red-500 ml-2"}>{product?.for_gender}</span></p>
         <p className="flex items-center justify-between pb-[2px] border-b  mb-2 ">Yosh oraligi : <span className="text-red-500">{product?.age_min} yoshdan  - {product?.age_max} yoshgacha</span> </p>
         <del className=" text-gray-500 font-serif flex justify-end">{product?.cost} UZS</del> 
         <p className='flex items-center justify-between pb-[2px] border-b  mb-2 '>Narxi : <span className=" text-red-500"> {Math.ceil(product?.cost - (product?.cost / 100) * product?.discount) * count} UZS</span></p>  
          <div className='flex items-center justify-end'>

            <div className='flex items-center gap-5 border p-2 rounded-md'>

             <button  className=' text-[22px]' disabled={count == 1} onClick={()=>{setCount(count -1)}}><RemoveIcon /></button>
              <span className='text-[20px]'>{count}</span>
             <button className=' text-[22px]' onClick={()=>{setCount(count + 1)}} disabled={count == product?.count}><AddIcon /></button>
            </div>
          </div>
          
          <div className="flex items-center gap-3 ">
             <Stack spacing={1} sx={{paddingY:1}}>
               <Rating name="size-medium" defaultValue={3} size="large" />
             </Stack>
              <IconButton aria-label="add to favorites" onClick={()=>{btnLike(product?.product_id)}} >
                 <FavoriteIcon fontSize="medium"/>
              </IconButton>
              <IconButton aria-label="add to favorites"  >
                 <ShoppingCartIcon fontSize="medium"/>
              </IconButton>
          </div>
          <p onClick={()=>{navigate("/")}} className='pt-3 flex justify-end cursor-pointer'>Asosoiy sahifaga qaytish → </p>
       </div>
    </div>
  </>
}

export default index