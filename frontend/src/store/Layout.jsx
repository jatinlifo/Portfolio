import Navbar from '../components/Navbar'
import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'


function Layout() {

    return (
        <>
        <Navbar />
        <main className='pt-20'> 
            <Outlet />
        </main>
        <Footer />
    </>
    )
}

export default Layout;