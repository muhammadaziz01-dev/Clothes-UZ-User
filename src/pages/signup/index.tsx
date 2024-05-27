import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useEffect } from "react";

import { setCookies, getCookies } from "@coocse";
import { validationSchemaRegister } from "@validations";
import {initialValuesRegister} from "@global-interface"
import "./style.scss";

const index = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const initialValues: initialValuesRegister = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    gender: "",
  };

  const handelSubmit = async (values: initialValuesRegister) => {
    console.log(values);

    // try{
    //     const respons = await auth.signin(values);
    //     console.log(respons);
    //     if(respons.status ===200){
    //         setCookies("access_token",respons?.data?.access_token );
    //         setCookies("refresh_token" , respons?.data?.refresh_token )
    //         toast.success("successfully logged in");
    //         setTimeout(()=>{navigate("/home");},1000)

    //     }
    // }catch(error:any){
    //     toast.error("Error : " + error?.message);
    //     console.log(error);
    // }
  };
  return (
    <>
      <div className=" w-full  flex items-center justify-center">
        <div className="max-w-[710px] w-full py-10 px-20 rounded-tl-[30px] rounded-br-3xl shadow-[30px]">
          <h1 className="text-center mb-5 text-[18px] md:text-[36px] font-bold text-gray-500">
            Ro'yxatdan o'tish
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaRegister}
            onSubmit={handelSubmit}
          >
            <Form className=" w-full   flex flex-col gap-[15px]">
              <Field
                as={TextField}
                label="Email"
                sx={{
                  "& input": { color: "rgb(107 114 128)", fontSize: "20px" },
                }}
                type="email"
                name="email"
                className=" w-[100%] mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Field
                as={TextField}
                label="First Name"
                name="first_name"
                className="w-full mb-3"
              />
              <ErrorMessage
                name="first_name"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Field
                as={TextField}
                label="Last Name"
                name="last_name"
                className="w-full mb-3"
              />
              <ErrorMessage
                name="last_name"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Field
                as={TextField}
                label="Parol"
                sx={{
                  "& input": { color: "rgb(107 114 128)", fontSize: "20px" },
                }}
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

              <Field
                as={RadioGroup}
                aria-label="gender"
                name="gender"
                className="flex items-center mb-3"
              >
                <div className="flex items-center justify-between">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </div>
              </Field>
              <ErrorMessage
                name="gender"
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
          <p className=" text-[20px] text-sky-500 pt-2 flex items-center justify-between">
            Ro'yxatdan o'tganmisiz ? 
            <span className="  hover:text-sky-700 duration-200 cursor-pointer" onClick={()=>{navigate("/signin")}}> → Tizimga kirish </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default index;
