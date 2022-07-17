export const NavbarOpen = (state,NavbarState) => {
    return { type:'OPEN',NavbarState:state.isOpen}
}    

export const NavbarClose = (state,NavbarState) => {
    return { type:'CLOSE',NavbarState:!state.isOpen}
}