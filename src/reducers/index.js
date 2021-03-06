import { combineReducers } from 'redux';


const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    signInUserFail: '',
    cadUserFail: '',
    waiting: false
};

let AuthReducer = (state = INITIAL_STATE, action) => {
    if(action.reset){
        for(var key in action.reset){
            state[key] = action.reset[key];        
        }
    }
    state[action.type] = action.payload;
    return { ...state }
    
}

export default combineReducers({
    AuthReducer: AuthReducer
});