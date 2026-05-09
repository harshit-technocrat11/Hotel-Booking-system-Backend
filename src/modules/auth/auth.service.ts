import bcrypt from "bcrypt"
import {prisma} from "../../db/prisma"

export const signupUser = async(data: any )=> {
    console.log(data);
    const {name, email, password, role, phone} =  data;

    // checking user existence
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if ( existingUser){
        throw new Error("User already exists");
    }

    // hash password
    const hashedPass = await bcrypt.hash(password, 10)

    // create user 
    const user = await prisma.user.create({
        data:{
            name, 
            email, 
            password: hashedPass, 
            role, 
            phone,
        }
    })

    return {
        id: user.id , 
        name: user.name, 
        email: user.email, 
        role: user.role 
    }
}

export const loginUser = async ( data: any )=> {
    console.log( data);

    return {
        message: "User Login service working now !!!"
    }
}