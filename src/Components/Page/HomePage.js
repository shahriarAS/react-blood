import React from 'react'
import Header from '../Utilities/Header'
import About_US from '../Utilities/AboutUS'
import Slider from '../Utilities/Slider'
import Team from '../Utilities/Team'
import Testimonials from '../Utilities/Testimonials'

function HomePage() {
    return (
        <div>
            <Header />
            <Slider />
            <About_US />
            <Team />
            <Testimonials />
        </div>
    )
}

export default HomePage
