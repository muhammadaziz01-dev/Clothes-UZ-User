import request from "../config";
import { Request } from "@interface";

export const auth:Request={
    signup: (data)=> request.post("/register",data),
    verify: (data)=> request.post(`/verify?email=${data.email}&otp=${data.otp}`), 
    createUser: (data)=> request.post("/user",data),
    signin: (data)=> request.post("/login",data),
}