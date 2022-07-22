const initState = {
    isOpen:false
}

const rootReducer = (state=initState,action) => {
    if(action.type==='TOGGLE'){
        let newState = !(state.isOpen)
        return {
            ...state,
            isOpen:newState
        }
    }
    return state
}

export default rootReducer