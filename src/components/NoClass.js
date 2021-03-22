import React from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export default function NoClass() {
  return (
    <div className="pt-2 class_home">
      <div className="home_control">
        <h3>MY CLASSES</h3>
        <div className="arrow non_active">
          <IoArrowBack />
          <IoArrowForward />
        </div>
      </div>

      <div className="text-center no_class">
        <p>NO CLASSES YET</p>
      </div>
    </div>
  );
}
