import React, { useState, useRef, useEffect } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const Pagination = ({ profilePerPage, totalProfiles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfiles / profilePerPage); i++) {
    pageNumbers.push(i);
  }

  const [pnumber, setNumber] = useState(2);

  return (
    <nav>
      <div className="pagination mx-auto">
        <IoArrowBack
          onClick={() => {
            pageNumbers.map((number) => {
              return paginate(number);
            });
          }}
        />
        <IoArrowForward
          onClick={() => {
            pageNumbers.map((number) => {
              return paginate(number);
            });
          }}
        />
        {/* {pageNumbers.map(number =>{
                    return setNumber(number)}
                )} */}
      </div>

      {/* <IoArrowBack onClick={() => alert(pnumber)} />
            <IoArrowForward onClick={() => alert(pnumber)} /> */}

      {/* <li key={number} className='page-item mx-auto'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li> */}
    </nav>
  );
};
