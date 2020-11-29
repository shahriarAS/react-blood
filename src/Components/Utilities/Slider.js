import React from 'react'
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true}>
            <div className="slide-list__content-area slide_2 overflow-hidden w-full">
                <div className="slider_text text-white text-left">
                    <h3 className="hidden lg:block text-4xl font-medium mb-3">Donate blood,save life !</h3>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl uppercase font-bold mb-4">
                        DONATE BLOOD
                                        <br />
                                            AND INSPIRES OTHERS.
                                    </h2>
                    <div className="slider_btn mt-10 flex flex-col md:flex-row gap-3 items-start">
                        <Link to="/sign_up"
                            className="donate_btn py-4 px-10 lg:px-16 rounded bg-red-600 text-xl lg:text-2xl hover:bg-red-500 text-center">Donate
                                            Blood</Link>
                        <Link to="/donor_list"
                            className="donate_btn py-4 px-10 lg:px-16 rounded bg-gray-900 text-xl lg:text-2xl hover:bg-gray-800 text-center">Recieve
                                            Blood</Link>
                    </div>
                </div>
            </div>
            <div className="slide-list__content-area slide_1 overflow-hidden w-full">
                <div className="slider_text text-white text-left">
                    <h3 className="text-4xl font-medium mb-3 hidden lg:block">Donate blood,save life !</h3>
                    <p className="text-2xl sm:text-4xl lg:text-5xl uppercase font-bold mb-4">
                        YOUR BLOOD
                                        <br />
                                        CAN BRING SMILE
                                        <br />
                                        IN OTHER PERSON FACE
                                    </p>
                    <div className="slider_btn mt-10 flex flex-col md:flex-row gap-3 items-start">
                        <Link to="/sign_up"
                            className="donate_btn py-4 px-10 lg:px-16 rounded bg-red-600 text-xl lg:text-2xl hover:bg-red-500 text-center">Donate
                                            Blood</Link>
                        <Link to="/donor_list"
                            className="donate_btn py-4 px-10 lg:px-16 rounded bg-gray-900 text-xl lg:text-2xl hover:bg-gray-800 text-center">Recieve
                                            Blood</Link>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default Slider
