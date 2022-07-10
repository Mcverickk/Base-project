import React,{useState} from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import logo from './logo.png'
import './styles.css'

function Navbar() {
const [isOpen, setOpen] = useState(false)
// { isOpen ? <></>

// }

  return (
    <div className='NavbarContainer'>
        <img src={logo} alt='sorry'></img>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#FFF"/>
    </div>
  )
}

export default Navbar