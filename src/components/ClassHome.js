import React, { useEffect, useState } from 'react';
import Booking from './Booking';

export default function ClassHome({ profile }) {
  const [booking, setBooking] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const API = 'http://elpis.sucursalsvirtual.com/apiv1/course/readall.php';
  const [classHome, setClassHome] = useState([]);

  useEffect(() => {
    const getClass = async () => {
      const response = await fetch(API);
      let data = await response.json();
      setClassHome(data.records);
    };

    getClass();
  }, []);

  const showBooking = (event,item) => {
    event.preventDefault()
    setOpenModal(!openModal);
    setBooking(item);
  };

  return (
    <div className="pt-5 class_home">
      <div className="home_control">
        <h3>CLASSES FOR YOU</h3>
      </div>

      <div className="row">
        {classHome.map((item) => (
          <a
            href="/"
            onClick={(event) => showBooking(event,item)}
            value={item.id}
            className={booking || profile ? 'col-lg-3 class_home filter_back' : 'col-lg-3 class_home'}
            key={item.id}
          >
            <sub>{item.category}</sub>
            <img src={item.filelocation} alt="class images" />
            <h6>{item.title}</h6>
            <p>₦{item.cost} NGN</p>
          </a>
        ))}
      </div>
      {openModal && <Booking booking={booking} onClose={() => setOpenModal(!openModal)} />}
    </div>
  );
}
