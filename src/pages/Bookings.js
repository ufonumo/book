import React from 'react';
import david from '../assets/unsplash.jpg'
import { MdKeyboardBackspace } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import {  Switch, Route,Link} from "react-router-dom";


const Bookings = ({ booking , showBooking , showProfile }) =>  {

    return (
        <div>
            <div className={booking ? "  ml-auto booking active ": "ml-auto booking "}>
                <div className="book_img ">
                    <Link className='response_btn'><MdKeyboardBackspace onClick={showBooking}  id='back_arrow'/></Link>  
                    <img src={david} alt=""/>
                    <div className="text-center">
                        <Link to="/Sucess" > <button type='button'> Book a class </button></Link> 

                    </div>
                </div>

                <div className="pl-4 pr-4 book_overflow pb-5">
                    <div className='booking_price'>
                        <h6>Movie making masterclass</h6>
                        <div className="booking_price_star">
                            <p>₦1000</p>
                            <div className=" pl-4 booking_star">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="booking_describe">
                        <h6>Description</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione facere,
                        enim vero quod recusandae harum praesentium amet, voluptatum nulla voluptates. Ducimus eligendi 
                        voluptatibus in doloremque similique quaerat porro delectus.</p>
                    </div>

                    <div className="booking_requirement booking_describe">
                        <h6>Requirements</h6>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione facere,
                        enim vero quod recusandae harum</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione facere,
                        enim vero quod recusandae harum</li>
                        </ul>
                    </div>

                    <div className="booking_available booking_describe">
                        <h6>Available time</h6>

                        <input type="time"/>
                        <input type="time" className='mt-3'/>
                    </div>

                    <div className="booking_tutor booking_describe mb-5 mt-5">
                        <h6>Tutor</h6>
                        
                        <div className="booking_tutor_profile">

                            <img src={david} alt=""/>
                            <p>Dorathy David</p>
                            <div className='mt-2'>
                                <button type='button' onClick={showProfile} className='booking_tutor_profile_btn'>See Profile</button>
                            </div>

                        </div>
                    </div>
                </div>

          

            </div>
        
        </div>
    )
}

export default Bookings  ;