import { LOGOUT } from '../constant'

export const logOutReducer = (state={}, action) => {
    switch(action.type){
        case LOGOUT :
            localStorage.removeItem('token')
            let logout = action.type.data
            return {logout}
            break;

        default :
            return state;    
    }
}