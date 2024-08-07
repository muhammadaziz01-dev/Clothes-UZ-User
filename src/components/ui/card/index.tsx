import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ProductInterface } from "@global-interface";
import useLikeStore from "@stor-like";
import useCartStore from "@stor-cart";
import { getCookies } from "@coocse";
import "./style.scss";
// import { useEffect, useState } from "react";

const index = ({ key, data }: { key: number; data: ProductInterface }) => {
  console.log(key);
  const navigate = useNavigate();
  const { postLike , getLikes  } = useLikeStore();  // dataLike
  const { postCart , getCart } = useCartStore();

  // const [like , setLike] = useState(false)

  const navigetBtn = (id: string) => {
    navigate(`/product/${id}`);
  };

  // function like ----------------------
  const btnLike = async (id: string) => {
    if (getCookies("user_id")) {
      const like = await postLike(id);
      console.log(like);
      
      if (like === true) {
        toast.success("was included in the list");
        getLikes()
      } else if (like == false) {
        toast.info("removed from the list");
        getLikes()
      }
    } else {
      toast.info("Janob siz ro'yhatdan o'tmagansiz");
    }
  };
  //==-=-=-==-=--=-=-=-=-==-=-=-==-==-=-=--=-


  // function Cart ----------------------
  const btnCart = async (id: string) => {
    const userId = getCookies("user_id")
    if (userId) {
      const cart = await postCart({productId:id});
      // console.log(cart);
      if (cart === true) {
        toast.success("added to cart");
        getCart(data?.product_id)
      } else if (cart == false) {
        toast.info("removed from cart");
        getCart(data?.product_id)
      }
    } else {
      toast.info("Janob siz ro'yhatdan o'tmagansiz");
    }
  };

  // useEffect(()=>{
  //   if(getCookies("user_id")){
  //     if(dataLike.length > 0){
  //       if(dataLike.includes((el:any)=>{el.product_id === data.product_id})){
  //         setLike(true)
  //       }else {
  //         setLike(false)
  //       }
  //     }
  //   }
  // },[getLikes , setLike , btnLike])
  // if(dataLike.includes((el: any)=> {
  //   return el.product_id === data.product_id
  // })){
  //   setLike(true)
  // }

  return (
    <>
      <div className="relative overflow-hidden h-[405px] group  ">
        <div className=" absolute -top-5 -right-11 z-10 flex flex-col items-center group-hover:right-1  group-hover:top-1 duration-300">
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              btnLike(data.product_id);
            }}
          >
            <FavoriteIcon fontSize="medium" className={ "text-[rgb(3,105,161)]" } />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              navigetBtn(data?.product_id);
            }}
          >
            <VisibilityIcon
              fontSize="medium"
              sx={{ color: "rgb(3 105 161)" }}
            />
          </IconButton>
        </div>
        <div onClick={() => {navigetBtn(data?.product_id)}}
          className=" border h-[405px] overflow-hidden transition rounded-md hover:shadow-lg"
        >
          <div className="w-full max-h-[260px] h-full mx-auto flex items-center justify-center overflow-hidden ">
            <img
              src={ data?.image_url ?  data?.image_url[0] : "https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"}
              alt={data.product_name}
              className="max-h-[260px] w-full  group-hover:scale-110 duration-300"
            />
          </div>
          <div className="pt-[8px] px-5">
            <h2
              className=" text-center mb-[5px] cursor-pointer "
              onClick={() => {
                navigetBtn(data?.product_id);
              }}
            >
              {data?.product_name?.length > 25
                ? data?.product_name?.slice(0, 17) + "..."
                : data?.product_name}
            </h2>
            <p>
              {" "}
              Made in : <span className="text-red-500">{data?.made_in}</span>
            </p>
            <p>
              {" "}
              For gender :{" "}
              <span className="text-red-500 ">{data?.for_gender}</span>
            </p>
            <del className=" text-gray-500 font-serif pl-12">
              {data?.cost} UZS
            </del>
            <p>
              Narxi :{" "}
              <span className=" text-red-500">
                {" "}
                {Math.ceil(
                  data?.cost - (data?.cost / 100) * data?.discount
                )}{" "}
                UZS
              </span>
            </p>
          </div>
        </div>
        <div className=" absolute -right-11 -bottom-5 group-hover:right-1 z-10 group-hover:bottom-1 duration-300">
          <IconButton aria-label="add to favorites"
           onClick={()=>{
             btnCart(data.product_id)  // btnCart(id)
           }}
          >
            <ShoppingCartIcon
              fontSize="medium"
              sx={{ color: "rgb(239 68 68)" }}
            />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default index;
