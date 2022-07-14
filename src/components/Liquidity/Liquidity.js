import Aos from 'aos'
import "aos/dist/aos.css";
import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Sidebar/SideBar'
import '../Swap/styles.css'
import { DataTags } from '../Swap/SwapData'
import { DataTags2 } from '../Swap/SwapData'


function Liquidity() {

  useEffect(()=>{Aos.init({
    duration:1000
  })},[])

  return ( 
      <>
      <div className='Navbar'><Navbar /></div>
      <div className="MainContainer">
        <div className='Sidebar'>
          <SideBar />
        </div>
      
        <div className='SwapContainer'>
          <div data-aos="zoom-in" className='AddressContainer'>Address</div>
          <div className='FormContainer'>
            <div className='EllipseOne'></div>
            <h1 data-aos="fade-right">Swap</h1>
            <form data-aos="fade-left">
              <input></input>
              <input></input>
              <input type='submit' value="CONFIRM SWAP"></input>
            </form>
            <div className='EllipseTwo'></div>

            <div className='Data'>
              <div data-aos="fade-down" data-aos-delay="500" className='DataValues1'>
                { DataTags.map((item,index) => {
                  return (
                    <span className="dataValues" key={index}>{item.title}</span>
                  )
                })}
              </div>
              <div data-aos="fade-up" data-aos-delay="1000" className='DataValues2'>
                { DataTags2.map((item,index) => {
                  return (
                    <span className="dataValues" key={index}>{item.title}</span>
                  )
                })}
              </div>
            </div>
        </div>
      
      </div>
      
    </div>
    </>
  )
}

export default Liquidity