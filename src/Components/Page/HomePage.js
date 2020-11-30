import React from 'react'
import Header from '../Utilities/Header'
import About_US from '../Utilities/AboutUS'
import Slider from '../Utilities/Slider'
import Team from '../Utilities/Team'
import Testimonials from '../Utilities/Testimonials'
import Contact from '../Utilities/Contact'
import Footer from '../Utilities/Footer'

function HomePage() {
    return (
        <div>
            <Header />
            <Slider />
            <About_US />
            <Testimonials />
            <Team />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage
