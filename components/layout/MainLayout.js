import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidenav from '../sidenav/Sidenav'
const MainLayout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div  className="main-grid">
        <Sidenav/>
        <div>{children}</div>
        </div>
            
        </>
    )
}

export default MainLayout
