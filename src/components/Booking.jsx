import React from 'react';
import david from '../assets/unsplash.jpg';
import { MdKeyboardBackspace } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Booking = ({ onClose, booking }) => {
  return (
    <div>
      <div className=" ml-auto booking active">
        <div className="book_img ">
          <MdKeyboardBackspace id="back_arrow" onClick={onClose} />
          <img src={booking && booking.filelocation} alt="Booking" />
          <div className="text-center">
            <Link to="/Sucess">
              <button type="button"> {booking && booking.title} </button>
            </Link>
          </div>
        </div>

        <div className="pl-4 pr-4 book_overflow pb-5">
          <div className="booking_price">
            <h6>{booking && booking.category}</h6>
            <div className="booking_price_star">
              <p>₦{booking && booking.cost} NGN</p>
              <div className=" pl-4 booking_star">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>

          <div className="booking_describe">
            <h6>Description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione facere, enim vero quod recusandae
              harum praesentium amet, voluptatum nulla voluptates. Ducimus eligendi voluptatibus in doloremque similique
              quaerat porro delectus.
            </p>
          </div>

          <div className="booking_requirement booking_describe">
            <h6>Requirements</h6>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione facere, enim vero quod recusandae
                harum
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione facere, enim vero quod recusandae
                harum
              </li>
            </ul>
          </div>

          <div className="booking_available booking_describe">
            <h6>Available time</h6>

            <input type="time" />
            <input type="time" className="mt-3" />
          </div>

          <div className="booking_tutor booking_describe mb-5 mt-5">
            <h6>Tutor</h6>

            <div className="booking_tutor_profile">
              <img src={david} alt="" />
              <p>Dorathy David</p>
              <div className="mt-2">
                <button type="button" className="booking_tutor_profile_btn">
                  See Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
