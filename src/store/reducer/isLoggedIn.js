const loggedToken = localStorage.getItem('token')

export const isLoggedIn = (state = loggedToken , action) => {
    switch(action.type){
        case 'ISLOGGED_IN':
            return null

        default :
            return state;    
    }
}