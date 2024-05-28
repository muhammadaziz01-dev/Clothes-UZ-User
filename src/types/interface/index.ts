// --------- Authorization  -------------

export interface Signin{
    email: string;
    password: string;
}

export interface Signup extends Signin{
    first_name: string;
    last_name: string;
    gender:string;
}

export interface ResetPassword{
    email?: string;
    phone?: string|number;
}

interface Verify {
    email: string;
    otp: string
}


export interface Request{
    signup:(data:Signup)=>any,
    verify:(data:Verify)=>any,
    createUser:(data:Signup)=>any,
    signin:(data:Signin)=>any,
    
    // reset:(data:ResetPassword)=>void
}

// ------------------------------------