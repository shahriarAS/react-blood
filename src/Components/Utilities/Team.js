import React from 'react'
import avatar1 from "../../assets/img/avatar-1.png"
import avatar2 from "../../assets/img/avatar-2.png"
import avatar3 from "../../assets/img/avatar-3.png"
import avatar4 from "../../assets/img/avatar-4.jpg"

function Team() {
    return (
        <section className="team" id="Team">
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">Pitchfork
                                Kickstarter Taxidermy</h1>
                            <div className="h-1 w-20 bg-red-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon
                        brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                        heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac
                            humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar1} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Shahriar Ahmed Shovon</h1>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar2} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Shahriar Ahmed Shovon</h1>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar3} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Shahriar Ahmed Shovon</h1>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 sm:w-1/2 p-4 flex items-center justify-center">
                            <div className="flip-card rounded-xl overflow-hidden">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={avatar4} alt="Avatar" />
                                    </div>
                                    <div
                                        className="flip-card-back py-8 flex flex-col items-center justify-center bg-red-600 text-white">
                                        <h1 className="text-2xl">Shahriar Ahmed Shovon</h1>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Team
