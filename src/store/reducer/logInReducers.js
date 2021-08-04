import{LOGIN} from '../constant';



export const logInReducers = (state = {} , action) => {
  switch(action.type){
     case LOGIN :
         return{newToken: action.payload.newToken}
        //  break;
     
     default :
         return state     
  }
 
}