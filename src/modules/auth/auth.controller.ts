import type { Request, Response } from "express";
import { loginSchema, signupSchema } from "./auth.schema";
import { signupUser , loginUser} from "./auth.service";

export const signup = async (req: Request, res: Response)=>{

    const validatedData = signupSchema.parse(req.body)

    const result = await signupUser(validatedData) //using service

    return res.json({
        success: true, 
        data: result, 
        error: null, 
    })
}

export const login = async ( req: Request , res: Response )=>{
    const validatedData = loginSchema.parse(req.body)

    const result = await loginUser(validatedData) //using service

    return res.json({
        success: true,
        data: result, 
        error: null
    })
}