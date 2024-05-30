import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";


import {setCookies } from "@coocse"
import {schemaLogin} from "@validations"
import {initialValuesLogin} from "@global-interface"
import "./style.scss"
import {auth} from "../../service/auth"

const index = () => {

   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

   
    const initialValues: initialValuesLogin = {
        email:  "",
        password:  "",
    };
   


  const  handelSubmit =async(values :initialValuesLogin)=>{
    try{
        const respons = await auth.signin(values);
        console.log(respons);
        if(respons.status ===200){
           console.log("success");
           
            setCookies("access_token",respons?.data?.access_token );
            setCookies("refresh_token" , respons?.data?.refresh_token );
            setCookies("user_id" , respons?.data?.id);
            toast.success("successfully logged in");
            setTimeout(()=>{navigate("/");},1000)

        }
    }catch(error:any){
        toast.error("Error : " + error?.message);
        console.log(error);
    }
  }
    return <>

    {/* <div>
        <button>Asosiyga qaytish </button>
    </div> */}
    
    
     
     <div className=" w-full  flex items-center justify-center">
        <div className="max-w-[710px] w-full py-2 px-4 sm:py-10 sm:px-20 rounded-tl-[30px] rounded-br-3xl shadow-[30px]">
          <h1 className="text-center mb-5 text-[24px] sm:text-[36px] font-bold text-gray-500">
            Tzimga kirish
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaLogin}
            onSubmit={handelSubmit}
            
          >
            <Form className=" w-full   flex flex-col gap-[15px]">
              <Field
                as={TextField}
                label="Email"
                sx={{ "& input": { color: "rgb(107 114 128)", fontSize: "20px" } }}
                type="email"
                name="email"
                className=" w-[100%] mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <p
                onClick={() => {
                  alert("therefore, it should not be forgotten : ) ")
                  localStorage.clear();
                }}
                className="text-[16px] sm:text-[20px] text-sky-500 flex justify-end hover:text-sky-700 duration-200 cursor-pointer"
              >
                Parolni unutdingizmi ?
              </p>

              <Field
                as={TextField}
                label="Parol"
                sx={{ "& input": { color: "rgb(107 114 128)", fontSize: "20px" } }}
                type={showPassword ? "text" : "password"}
                name="password"
                className=" w-[100%] mb-3 outline-none py-0"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Button
                sx={{ fontSize: "16px", fontWeight: "600", padding: "14px" }}
                variant="contained"
                type="submit"
                className="w-[100%] "
              >
                kirish
              </Button>
            </Form>
          </Formik>
         <p className=" text-[14px] md:text-[20px] text-sky-500 pt-2 flex flex-col sm:flex-row items-center justify-between">
            Ro'yxatdan o'tmaganmisiz ? 
            <span className="  hover:text-sky-700 duration-200 cursor-pointer" onClick={()=>{navigate("/signup")}}> → Ro'yxatdan o'tish </span>
          </p>
        </div>
      </div>
      <ToastContainer />

    </>};

export default index;