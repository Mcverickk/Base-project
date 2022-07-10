import React from 'react'
import SideBar from '../Sidebar/SideBar'
import './styles.css'

function Pools() {
  return (
    <div className='MainContainer'>
      
      <div className='Sidebar'>
        <SideBar />
      </div>
      
      <div className='PoolsContainer'>
        Pools
      </div>
      
    </div>
  )
}

export default Pools