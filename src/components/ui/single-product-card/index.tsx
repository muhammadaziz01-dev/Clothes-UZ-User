
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import {ProductInterface} from "@global-interface"
import { IconButton } from '@mui/material';


function index({product} :ProductInterface | any) {
  const navigate = useNavigate();
  return <>
    <div className="flex flex-col md:flex-row  items-center gap-[30px]">
       <div className="max-w-[500px] max-h-[700px] ">
         <img  className=" max-h-[450px] w-full h-full" src={product?.image_url} alt={product?.product_name} />
       </div>
       <div className="p-2 md:max-w-[330px] lg:max-w-[450px]">
         <h1 className="text-center text-[22px] mb-2">{product?.product_name}</h1>
         <p className="pb-1 text-gray-600">{product?.description}</p>
         <p className=" ">Islab chiqarilgan joyi : <span className="text-red-500 pl-2"> {product?.made_in}</span></p>
         <p className=" ">Mahsulot rangi : <span className=" text-gray-500 pl-2"> {product?.color}</span></p>
         <p className="">Mahsulot o'lchami : <span className="text-red-500 pl-2"> {product?.size}</span></p>
         <p className=" ">Mahsulot soni : <span className="text-red-500 pl-2">{product?.count} ta</span></p>
         <p className=" ">Chegirma ko'rsatgich : <span className="text-red-500 pl-2">{product?.discount} %</span> </p>
         <del className=" text-gray-500 font-serif pl-12">{product?.cost} UZS</del> 
         <p>Narxi : <span className=" text-red-500"> {Math.ceil(product?.cost - (product?.cost / 100) * product?.discount)} UZS</span></p>  
         <p className=""> Kimlar uchun : <span className={product?.for_gender == "male" ? "text-gray-500 pl-2" : "text-red-500 ml-2"}>{product?.for_gender}</span></p>
         <p className="">Yosh oraligi : <span className="text-red-500">{product?.age_min} yoshdan  - {product?.age_max} yoshgacha</span> </p>
          <div className="flex items-center gap-3">
             <Stack spacing={1} sx={{paddingY:1}}>
               <Rating name="size-medium" defaultValue={3} size="large" />
             </Stack>
              <IconButton aria-label="add to favorites"  >
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