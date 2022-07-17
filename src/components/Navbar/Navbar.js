import React,{useState} from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import logo from './logo.png'
import './styles.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
const [isOpen, setOpen] = useState(false)

  return (
    <div className='NavbarContainer'>
        <NavLink to='/'><img src={logo} alt='sorry'></img></NavLink>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#FFF"/>
    </div>
  )
}

export default Navbar