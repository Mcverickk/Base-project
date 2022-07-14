import React, { useState } from 'react'
import './styles.css'
import logo from './baselogo.png'
import { FaTwitter } from 'react-icons/fa'
import Rect1 from './Rect1.png'
import Rect2 from './Rect2.png'
import Rect3 from './Rect3.png'
import Rect4 from './Rect4.png'
import { Links } from './HomepageLinks'
import { NavLink } from 'react-router-dom'
 

function Homepage() {

  const [isActive,setActive] = useState(true)


  return (
    <div>
        
        <nav>
            <img src={logo} alt="Base"></img>
            <div className='Links'>
            {   Links.map((item,index)=>{
                return(
                    <NavLink to={isActive? `${item.path}` :'/'} key={index}>
                        {item.title}
                    </NavLink>
                    // <Link to={isActive ? '/link-to-route' : '#'} />
                )
            }) }
            </div>    
            <div style={{paddingTop:'12px'}}><FaTwitter color='#fff' size={32} /></div>
        </nav>
        
        {/* <div><div className='blur1'></div></div> */}
            {/* <img src={Rect1} alt=".."></img>
            <img src={Rect2} alt=".."></img>
            <img src={Rect3} alt=".."></img>
            <img src={Rect4} alt=".."></img> */}
        
        <div className='TextContainer'>
            
            <div>Coming Soon.</div>
            <div>The Front page of Cube.Network</div>
            <div>
                <input type="email" placeholder='Enter your e-mail address'></input>
                <button>Get Notified</button>
            </div>
            <div>No worries,we don't spam ;</div>
        </div>
        
        <footer>
            All right reserved 2022 - Base protocol - <a href="/"><u>Privacy</u></a>
        </footer>
    
    </div>
  )
}

export default Homepage