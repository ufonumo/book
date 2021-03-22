import React, { useState, useRef, useEffect } from 'react';
import { Pagination } from './pagination';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import Carousel from 'react-elastic-carousel';

export default function ProfileComponent() {
  // const API = 'http://elpis.sucursalsvirtual.com/apiv1/student/readone.php?id=22';
  const API = 'http://elpis.sucursalsvirtual.com/apiv1/course/readall.php';

  const [profileClass, setprofileClass] = useState([]);
  let [loading, setloading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [profilePerPage] = useState(2);

  const indexOfLastPost = currentPage * profilePerPage;
  const indexOfFirstPost = indexOfLastPost - profilePerPage;
  const currentProfiles = profileClass.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const [number , setNumber]=useState([])

  useEffect(() => {
    const getEachProfile = async () => {
      const response = await fetch(API);
      let data = await response.json();
      console.log(data);
      setprofileClass(data.records);
    };

    getEachProfile();
  }, []);

  return (
    <div>
      <div className="pt-2 class_home">
        <div className="home_control">
          <h3>MY CLASSES</h3>
          <div className="arrow">
            <Pagination profilePerPage={profilePerPage} totalProfiles={profileClass.length} paginate={paginate} />
          </div>
        </div>

        <div className="row">
          {/* <Carousel> */}
          {currentProfiles.map((list) => (
            <div className="col-lg-6 class_home" key={list.id}>
              <sub>{list.category}</sub>
              <img src={list.filelocation} alt="class images" />
              <h6>{list.aim}</h6>
              <p>₦{list.cost} NGN</p>
            </div>
          ))}
          {/* </Carousel> */}
        </div>
      </div>
    </div>
  );
}
