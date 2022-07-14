import React, { useState,useEffect } from 'react'
import './styles.css'
import logo from './baselogo.png'
import { FaTwitter } from 'react-icons/fa'
import Rect1 from './Rect1.png'
import Rect2 from './Rect2.png'
import Rect3 from './Rect3.png'
import Rect4 from './Rect4.png'
import { Links } from './HomepageLinks'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Aos from 'aos'
import "aos/dist/aos.css";
 

function Homepage() {
    
    useEffect(()=>{Aos.init({
        duration:1000
      })},[])


  const [isActive,setActive] = useState(false)
    setTimeout(() => {
            setActive(!isActive)
    }, 10000000000);

  return (
    <div style={{overflow:'hidden',backgroundColor:'#02181C',height:'100vh'}}>
        
        <nav>
            <img data-aos="fade-up" src={logo} alt="Base"></img>
            <div className='Links'>
            {   Links.map((item,index)=>{
                return(
                    <NavLink 
                        to={isActive? `${item.path}` :'/'} 
                        style={ isActive?   {cursor:'pointer'}    :   {cursor:'not-allowed'}} 
                        key={index}>
                        <li data-aos-duration="1000" data-aos="fade-right" data-aos-delay={item.delay} style={{listStyle:'none'}}> {item.title}</li>
                    </NavLink>
                )
            }) }
            </div>    
            <motion.a className='twitter' data-aos="fade-down" href='/' whileHover={{
                      y:[5,-5,5,-5],
                      rotate:[0,-20,0,-20,0,-20],
                    }}
                style={{paddingTop:'12px'}}><FaTwitter color='#fff' size={32} /></motion.a>
        </nav>
        
        <div className='TextContainer'>
            
            <div className='blu1'>
                <motion.img src={Rect1} alt=".." 
                    animate={{rotate:180,scale:1.5}}
                    transition={{duration:0.75,repeat:Infinity}}
                    />
                <motion.img src={Rect2} alt=".."
                    animate={{rotate:-180,scale:2}}
                    transition={{duration:0.75,repeat:Infinity}}
                 />
            </div>
            
            <div data-aos="fade-down" data-aos-duration='2000'>Coming Soon.</div>
            
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration='2000'><motion.img src={Rect3} alt=".."
                    animate={{scale:1.2}}
                    transition={{duration:0.5,repeat:Infinity}}
                />The Front page of Cube.Network</div>
            
            <div>
                <input type="email" placeholder='Enter your e-mail address'></input>
                <motion.button whileHover={{
                    //   y:[5,-5,5,-5],
                      rotate:[0,10,-10,10,-10,10,-10,0],
                    }}>Get Notified</motion.button>
            </div>
            
            <div>No worries,we don't spam ;</div>
            
            <div><div className='blur2' />
                <motion.img src={Rect4} alt=".."
                    animate={{rotate:-45}}
                    transition={{duration:1,repeat:Infinity}}
                />
            </div>
        
        </div>
        
        <footer 
            // data-aos="fade-down"
        >
            All right reserved 2022 - Base protocol - <a href="/"><u>Privacy</u></a>
        </footer>
    
    </div>
  )
}

export default Homepage