import React from 'react'
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../../assets/img/avatar-1.png"

function Testimonials() {
    return (
        <>
            <div className="testimonial bg-red-200 flex">
                <div>
                    <img src={avatar1} className="rounded-full" />
                </div>
                <div className="testimonial_text">
                    <h1>Awesome Guys</h1>
                    <p>John Doe</p>
                </div>
            </div>
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true}>
                <div className="relative h-screen w-screen bg-red-200">
                    <div className="testimonial bg-red-200 flex h-screen">
                        <div>
                            <img src={avatar1} className="rounded-full" />
                        </div>
                        <div className="testimonial_text">
                            <h1>Awesome Guys</h1>
                            <p>John Doe</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default Testimonials
