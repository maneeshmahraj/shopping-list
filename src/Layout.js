

import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
   <nav>
    <div className='logo'><span style={{color:"red"}}>Fr</span>on<span style={{color:"red"}}>te</span>nd</div>
    <ul>
        <li><Link to="home" className='link'>Home</Link></li>
        <li><Link to="insert" className='link'>About</Link></li>
        <li><Link to="display" className='link'>Shop</Link></li>
        <li><Link to="record" className='link'>Contect</Link></li>
        
    </ul>
   
   </nav>
   <Outlet/>
    </>
  )
}

export default Layout