import React from 'react'
import Slide3 from "../../assets/img/slide-3.jpg"

function About_US() {
    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center gap-3">
                <div
                    className="about_us__text_div lg:flex-grow lg:w-1/2 lg:pr-24 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center shadow-xl hover:shadow-2xl p-10 gap-2">
                    <h1 className="text-5xl font-medium">Who We Are?</h1>
                    <hr className="border-red-600 border-2 w-16" />
                    <p className="tracking-wider text-left md:text-center">Blood Buddies is for public donation center with blood donation members in
                        the changing health care system.</p>
                    <ul className="font-sans border-red-100 text-left">
                        <li className="">Specialist blood donors and clinical supervision.</li>
                        <li className="">Increasing communication with our members.</li>
                        <li className="">High quality assessment, diagnosis and treatment.</li>
                        <li className="">Examine critically to ensure alignment.</li>
                        <li className="">The extra care of a multi-disciplinary team.</li>
                    </ul>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 ml-auto md:ml-6">
                    <img className="object-cover object-center rounded shadow-2xl" alt="hero" src={Slide3} />
                </div>
            </div>
        </section>
    )
}

export default About_US
