import { useEffect } from "react";

import useLikeStore from "@stor-like";
import { Card } from "@ui";
import { ToastContainer } from "react-toastify";

function index() {
  const { getLikes, data } = useLikeStore();



  useEffect(() => {
    getLikes({ page: 1, limit: 10 });
  }, []);
  return (
    <>
      <ToastContainer/>
      <div className="orginal-container">
        <h1 className="py-2 text-gray-500"> Sralangan mahsulotlar </h1>
        <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {data?.map((el, index) => {
            return <Card key={index} data={el} />;
          })}
        </div>
      </div>
    </>
  );
}

export default index;
