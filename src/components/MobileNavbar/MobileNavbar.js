import Aos from 'aos'
import "aos/dist/aos.css";
import React,{useEffect} from 'react';
import {  NavLink } from "react-router-dom";
import { SideBarData } from '../Sidebar/SideBarData';
import { SupportData } from '../Sidebar/SupportData';
import './styles.css'
import { connect } from 'react-redux'


function MobileNavbar(props) {

  const reverseState = () =>{
    props.isOpen = !(props.isOpen)
  }
  
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
    <div className='MobileSidebar'>
        <div className="Nav-Links">
        { SideBarData.map((item, index) => {
              return (                                  
                <div className='NavLinks1'>
                  <li data-aos={item.data} data-aos-delay={item.delay} key={index}>
                    <NavLink style={activeLinkStyles} to={item.path} onClick={reverseState}>
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                </div>
              );
            })}
        </div>
        
        <div className="Nav-Links" data-aos="fade-down" data-aos-delay="1000">
            { SupportData.map((item,index)=>{
                return(
                  <div className='NavLinks2'>
                    <li data-aos={item.data} data-aos-delay={item.delay} key={index}>
                      <NavLink style={activeLinkStyles} to={item.path} onClick={reverseState}>
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  </div>
                );
              })}
        </div>
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isOpen : state.isOpen
  }
}

export default connect(mapStateToProps)(MobileNavbar)