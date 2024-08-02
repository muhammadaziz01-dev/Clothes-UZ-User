import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useCartStore from "@stor-cart";
import { Card } from "@ui";
import { ToastContainer } from "react-toastify";
import {getCookies} from "@coocse"

function index() {
  const { getCart, dataCart } = useCartStore();
  const navigate = useNavigate();


 useEffect(() => {
    const userId = getCookies("user_id")
  if (!userId) {
    navigate("/");
  }else {
    getCart(userId);
  }
 },[]);

  return (
    <>
      <ToastContainer/>
      <div className="orginal-container">
        <h1 className="py-2 text-gray-500 text-[20px]"> Savatdagi mahsulotlar mahsulotlar </h1>
        <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {dataCart?.map((el, index) => {
            return <Card key={index} data={el} />;
          })}
        </div>
      </div>
    </>
  );
}

export default index;
