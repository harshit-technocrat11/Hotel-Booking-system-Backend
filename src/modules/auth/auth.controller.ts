import type { Request, Response } from "express";
import { loginSchema, signupSchema } from "./auth.schema";
import { signupUser , loginUser} from "./auth.service";

export const signup = async (req: Request, res: Response)=>{
    try{

        const validatedData = signupSchema.parse(req.body)
    
        const result = await signupUser(validatedData) //using service
    
        return res.status(201).json({
            success: true, 
            data: result, 
            error: null, 
        })
    }
    catch(error: any){
        return res.status(400).json({
            success: false, 
            data: null, 
            error: error.message
        })
    }
}

export const login = async ( req: Request , res: Response )=>{
   
   try {
       const validatedData = loginSchema.parse(req.body)
   
       const result = await loginUser(validatedData) //using service
   
       return res.status(400).json({
           success: true,
           data: result, 
           error: null
       })

   }
   catch(error: any ){
    return res.status(400).json({
        success: false, 
        data: null, 
        error: error.message, 
    })
   }
}