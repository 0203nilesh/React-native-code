const { LOGIN, SIGNUP } = require("../contant");

export default (state={authData: null}, action)=>{
    switch(action.type){
        case LOGIN : 
        return {...state, authData: action.payload}
        case SIGNUP: 
        return { ...state, authData: action.payload}
        default: 
        return {...state}
    }
}