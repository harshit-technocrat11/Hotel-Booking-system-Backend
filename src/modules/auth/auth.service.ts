export const signupUser = async(data: any )=> {
    console.log(data);

    return {
        message: "User signup service working !!!!"
    }
}

export const loginUser = async ( data: any )=> {
    console.log( data);

    return {
        message: "User Login service working now !!!"
    }
}