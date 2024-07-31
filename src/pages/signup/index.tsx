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
import { validationSchemaRegister, schema2 } from "@validations";
import { initialValuesRegister } from "@global-interface";
import { auth } from "../../service/auth";
import "./style.scss";

const index = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [messeg2, setMesseg2] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    gender: "",
  });

  const initialValues: initialValuesRegister = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    gender: "",
  };

  // Userni ro'yhatdan o'tkazish fun <------------------------------
  const handelSubmit = async (values: initialValuesRegister) => {
    try {
      const respons = await auth.signup(values);
      if (respons.status === 200) {
        toast.info("Emailnigizga cod yuborildi");
        setUserData(values);
        setMesseg2(true);
      }
    } catch (error: any) {
      toast.error("Error : " + error?.message);
      console.log(error);
    }
  };
  //=-=-=--=-=-=--=-=-=---=---=--=----=--=-=--=-=-=--=---=------=-----

  interface initialValues2 {
    code: string;
  }
  const initialValues2: initialValues2 = {
    code: "",
  };
  interface verifyData {
    email: string;
    code: string;
  }

  // Form subnit  verify--------------------------------------------------------
  const handelSubmit2 = async (value: any) => {
    const newCode: verifyData = {
      code: value.code,
      email: userData?.email,
    };
    // console.log(newCode);
    try {
      const res = await auth.verify(newCode);
      if (res.status === 201) {
        toast.success("Muoffaqiyatli saqlandi");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
        // const respons = await auth.createUser(userData)
        // if(respons.status === 201){
        //   toast.success("Muoffaqiyatli saqlandi")
        //   setTimeout(() => {navigate("/signin")},1000)
        // }
      }
    } catch (err: any) {
      console.log(err);
      toast.error("Error : " + err?.message);
    }

    // try {
    //   const res = await auth.verify(newCode);
    //   console.log(res);
    //   if (res.status === 201) {
    //     setMasseg2(false);
    //     setEmailUser("");
    //     toast.success("Muoffaqiyatli saqlandi")
    //     setTimeout(() => {navigate("/signin");},1000)
    //   }
    // } catch (err) {
    //   toast.error("Hatolik mavjud... " )
    //   console.log(err);
    // }
  };
  //============================================================================

  // Function useEffect Time ---------------------------------
  const [secondsLeft, setSecondsLeft] = useState(60);
  useEffect(() => {
    let timer = null;
    if (messeg2) {
      timer = setInterval(() => {
        setSecondsLeft((prevSecond) => prevSecond - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [messeg2]);

  useEffect(() => {
    if (secondsLeft === 0) {
      setMesseg2(false);
      setSecondsLeft(60);
    }
  }, [secondsLeft, setMesseg2]);

  //================================================================

  return (
    <>
      {messeg2 && (
        <div className=" fixed top-0 left-0 bg-[rgba(0,0,0,0.6)]  flex items-center justify-center z-50 w-full h-[100vh]">
          <div className=" relative px-20 py-10 rounded-lg bg-white shadow-2xl flex flex-col items-center justify-center gap-[10px] ">
            <h1 className="text-[20px] font-semibold text-sky-500 mb-3">
              Emailga yuborilgan codni kiriting
            </h1>
            <Formik
              initialValues={initialValues2}
              validationSchema={schema2}
              onSubmit={handelSubmit2}
            >
              <Form className=" max-w-[600px]  w-full flex flex-col gap-[12px]">
                <Field
                  as={TextField}
                  label="Codni kiriting"
                  sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                  type="text"
                  name="code"
                  className=" w-[100%]  mb-3 outline-none py-0"
                />
                <ErrorMessage
                  name="code"
                  component="p"
                  className="mb-3 text-red-500 text-center"
                />
                <p className="text-[16px] text-sky-500">
                  Vaqtingiz :{" "}
                  <span className={secondsLeft < 30 ? "text-red-500" : ""}>
                    {secondsLeft} soniya
                  </span>
                </p>
                <Button
                  sx={{ fontSize: "16px", fontWeight: "600" }}
                  variant="contained"
                  type="submit"
                  className="w-[100%] py-3"
                >
                  yuborish
                </Button>
              </Form>
            </Formik>
            {/* <button className="py-2 px-16 text-white bg-sky-500 hover:bg-sky-700 active:bg-sky-500 duration-200 rounded-lg">Davom etish</button> */}
            <button
              onClick={() => setMesseg2(false)}
              className=" absolute top-2 right-2 py-1 px-2 bg-transparent hover:shadow-sm rounded-lg duration-200"
            >
              <i className="bi bi-box-arrow-up-right text-sky-700"></i>
            </button>
          </div>
        </div>
      )}
      <div className=" w-full  flex items-center justify-center">
        <div className="max-w-[710px] w-full py-2 px-4 sm:py-10 sm:px-20 rounded-tl-[30px] rounded-br-3xl shadow-[30px]">
          <h1 className="text-center mb-5 text-[24px] md:text-[36px] font-bold text-gray-500">
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
          <p className=" text-[18px] sm:text-[20px] text-sky-500 pt-2 flex flex-col sm:flex-row items-center justify-between">
            Ro'yxatdan o'tganmisiz ?
            <span
              className="  hover:text-sky-700 duration-200 cursor-pointer"
              onClick={() => {
                navigate("/signin");
              }}
            >
              {" "}
              → Tizimga kirish{" "}
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default index;
