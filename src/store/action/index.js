import * as constant from '../constant';

export const isLoggedIn = () => {
    return {
        type: 'ISLOGGED_IN',
        payload: localStorage.getItem('token')
    }
}


export const LogInAction = (data) => {
    return {
       type: constant.LOGIN,
       payload: {
           token : localStorage.getItem('token'),
           newToken : data
       }
    }
}

export const LogOutAction = (data) => {
    
    return {
       type: constant.LOGOUT,
       data: data
    }
}