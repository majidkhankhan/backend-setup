import { signUpservice } from "../services/authService.js";

export const signUp = async (req,res)=>{
    try {
        const signUpController = await signUpservice(req,res);
        res.status(200).json({success:true,signUpController})

    } catch (error) {
        console.log(error)
    }
}