import React from 'react';
import {  NavLink } from "react-router-dom";
import { SideBarData } from './SideBarData';
import { SupportData } from './SupportData';
import './styles.css'


function SideBar() {

  const activeLinkStyles = ({isActive}) => { 
    return {
       color : isActive ? '#0EE9E8': '#656565',
       fontWeight : isActive ? '900' : '700' 
    }
  }  
   
  return (
    <div className='SidebarContainer'>
        
        <div className='logo'></div>
        
        <div className='navlinks'>
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
        
        <div className='supportlinks'>
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