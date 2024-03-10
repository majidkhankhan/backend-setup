import { loginService } from "../services/auth.service.js";

export const login =async(req,res)=>{
try {
    const loginController= await loginService(req,res);
    res.status(200).json({success:true,loginController})
} catch (error) {
    console.log(error)
}
}