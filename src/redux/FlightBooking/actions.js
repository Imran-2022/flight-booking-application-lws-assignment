import { ADDTOCART,DELETEFROMCART} from "./actionTypes"

export const addToCart =(dt)=>{
    return {
        type:ADDTOCART,
        payload:dt
    }
}
export const deleteFromCart =(dt)=>{
    return {
        type:DELETEFROMCART,
        payload:dt
    }
}