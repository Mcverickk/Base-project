import Aos from 'aos'
import "aos/dist/aos.css";
import React,{useEffect} from 'react';
import {  NavLink } from "react-router-dom";
import { SideBarData } from './SideBarData';
import { SupportData } from './SupportData';
import './styles.css'


function SideBar() {

  
  useEffect(()=>{Aos.init({
    duration:1000
  })},[])

  const activeLinkStyles = ({isActive}) => { 
    return {
       color : isActive ? '#0EE9E8': '#656565',
       fontWeight : isActive ? '900' : '700' 
    }
  }  
   
  return (
    <div className='SidebarContainer'>
        
        <div className='logo'></div>
        
        <div data-aos="fade-up" className='navlinks'>
        { SideBarData.map((item, index) => {
              return (
                <li className="nav-links" key={index}>
                  <NavLink style={activeLinkStyles} to={item.path}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
        </div>
        
        <div data-aos="fade-down" data-aos-delay="1000" className='supportlinks'>
            { SupportData.map((item,index)=>{
                return(
                  <li key={index}>
                    <NavLink style={activeLinkStyles} to={item.path}>
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
        </div>
    
    </div>
  )
}

export default SideBar