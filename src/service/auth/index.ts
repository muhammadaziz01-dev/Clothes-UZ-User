import request from "../config";
import { Request } from "@interface";

export const auth:Request={
    signup: (data)=> request.post("/register",data),
    verify: (data)=> request.post(`/verify/register?email=${data.email}&code=${data.code}`), ///v1/verify/register?email=akbarovmuhammadaziz050%40gmail.com&code=88989889
    createUser: (data)=> request.post("/user",data),
    signin: (data)=> request.post("/login",data),
}