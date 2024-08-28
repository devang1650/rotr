import React from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import LandingPage from '../Components/LandingPage/LandingPage'
import RotractPage from '../Components/Dignitaries/Dignitaries'

const Home = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <LandingPage />
            <RotractPage></RotractPage>

        </>
    )
}

export default Home