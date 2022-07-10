import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Sidebar/SideBar'
import './styles.css'

function Swap() {

  const DataTags = [
    {
      title:'Best Rate Guarantee'
    },
    {
      title:'Slippage'
    },
    {
      title:'GAS Fee'
    },
    {
      title:'Route'
    }
  ]

  const DataTags2 = [
    {
      title:'Best Rate Guarantee'
    },
    {
      title:'Slippage'
    },
    {
      title:'GAS Fee'
    },
    {
      title:'Route'
    }
  ]

  return ( 
      <>
      <div className='Navbar'><Navbar /></div>
      <div className="MainContainer">
        <div className='Sidebar'>
          <SideBar />
        </div>
      
        <div className='SwapContainer'>
          <div className='AddressContainer'>Address</div>
          <div className='FormContainer'>
            <div className='EllipseOne'></div>
            <h1>Swap</h1>
            <form>
              <input></input>
              <input></input>
              <input type='submit' value="CONFIRM SWAP"></input>
            </form>
            <div className='EllipseTwo'></div>

            <div className='Data'>
              <div className='DataValues1'>
                { DataTags.map((item,index) => {
                  return (
                    <span className="dataValues" key={index}>{item.title}</span>
                  )
                })}
              </div>
              <div className='DataValues2'>
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

export default Swap