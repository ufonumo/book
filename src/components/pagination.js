import React from 'react';
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const Pagination = ({profilePerPage, totalProfiles, paginate}) => {

    const pageNumbers=[];

    for(let i = 1; i <= Math.ceil(totalProfiles / profilePerPage); i++){
        pageNumbers.push(i)
    }
const [pnumber, setNumber] = useState(0)
    return (
        <nav>

                    {/* <IoArrowBack onClick={() => paginate(pageNumbers)} />
                         <IoArrowForward onClick={() => paginate(pageNumbers)} /> */}

            <ul className='pagination mx-auto'>
              <IoArrowBack onClick={
                ()=>{
                    pageNumbers.map(number=>{
                        return paginate(number)
                    })
                }
            }/>
            <IoArrowForward onClick={
                ()=>{
                    pageNumbers.map(number=>{
                        return paginate(number)
                    })
                }
            }/>
            </ul>
        </nav>
    )
}
