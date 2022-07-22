import React,{useState} from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import logo from './logo.png'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleNavbar } from '../../actions/actions'

function Navbar(props) {
// const [isOpen, setOpen] = useState(false)

const toggleNavbar = () =>{
  console.log(props)
  props.toggleNavbar(props,props.isOpen)
}

  return (
    <div className='NavbarContainer'>
        <NavLink to='/'><img src={logo} alt='sorry'></img></NavLink>
        <Hamburger toggled={props.isOpen} toggle={toggleNavbar} color="#FFF" />
    </div>
  )
}

const mapStateToProps = ( state ) =>{
  return {
   isOpen : state.isOpen 
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    toggleNavbar: (state,navbarState) => dispatch( toggleNavbar(state,navbarState) )    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)