const initState = {
    isOpen : false
}

const rootReducer = (state=initState,action) =>{
    if(action.type==='OPEN'){
        let newState = !(state.isOpen)
        return{
            ...state,
            isOpen : newState
        }
    }
    
    if(action.type==='CLOSE'){
        let newState = !(state.isOpen)
        return{
            ...state,
            isOpen : newState
        }
    }
}

export default rootReducer