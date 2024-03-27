import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingNav from '../components/Navbars/LandingNav'

function PageLayout() {

    return (
        <>
            <LandingNav /> 
            <Outlet></Outlet>
        </>
    )
}

export default PageLayout