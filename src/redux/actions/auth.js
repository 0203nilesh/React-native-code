import { LOGIN, SIGNUP } from "../contant"

export const register_user= ()=>{
    try {
        const data= {username: "Nilesh", password: "Nilesh@0203"}
        return {type: SIGNUP, payload: data}
    } catch (error) {
        console.log(error);
    }
}
export const login_user= ()=>{
    try {
        const data= {username: "Nilesh", password: "Nilesh@0203"}
        return {type: LOGIN, payload: data}
    } catch (error) {
        console.log(error);
    }
}