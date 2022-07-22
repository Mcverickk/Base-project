export const toggleNavbar = (state,navbarState) => {
    return { type:'TOGGLE',navbarState:state.isOpen }
}    
