const token = localStorage.getItem('token')

export const tokenReducer = (state = token,action) => {
  switch(action.type){
      case 'TOKEN':
          return action.payload
      
      default :
        return state    
  }
}