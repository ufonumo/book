import React, {useState, useRef, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import { GrAddCircle } from "react-icons/gr"
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


export default function SearchClass({booking , profile  , showBooking }) {

    const [search , setSearch] = useState([]);
    const baseURL = 'http://elpis.sucursalsvirtual.com/apiv1/course/searchcat.php?s=Business'

    useEffect(()=>{

        const getSearch = async ()=>{
            const response = await fetch( baseURL);
            let data = await response.json();
            console.log(data.records);
            setSearch(data.records);
        };

        getSearch()
    }, []);

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () =>
          console.log('totally custom!'),
        );

        return (
            <button
              onClick={decoratedOnClick}
            >
              {children}
            </button>
          );
    }


    return (
        <>

            <div className="container search_top pt-4">
                <div className="browse">
                        <h6>Browse by categories</h6>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select"  >
                                <option >Select a Category</option>
                                <option value='"Business"'> Business</option>
                                <option value='"Marketing"'>Marketing </option>
                                <option  value='"Technology"'> Technology </option>
                                <option value='"Investing and Trading"' >Investing and Trading</option>
                            </Form.Control>
                        </Form.Group>
                </div>

            </div>

            <div className="container search_scroll pt-2">
                
                <Accordion defaultActiveKey="0" className='mt-4'>
                    <Card>
                        <div className='search_arrow'>
                            <CustomToggle eventKey="0">
                                <div>
                                    Technology <GrAddCircle className='collapse_icon'/>
                                </div>
                            </CustomToggle>
                            <div className='search_arrow_arrows'>
                                <IoArrowBack />
                                <IoArrowForward />
                            </div>
                            
                        </div>

                        <Accordion.Collapse eventKey="0">
                        <div className="row">
                            {search.map( list  =>(
                                <div onClick={showBooking} setClassId={list.id} className={booking || profile ? "col-lg-3 class_home filter_back" : 'col-lg-3 class_home'} key={list.id}>
                                    <sub>{list.category}</sub>
                                    <img src={list.filelocation} alt="class images"/>
                                    <h6>{list.title}</h6>
                                    <p>₦{list.cost} NGN</p>
                                </div>
                            ))}
                        
                        </div>
                        </Accordion.Collapse>
                    </Card>
                    
                </Accordion>

                <Accordion defaultActiveKey="0" className='mt-5'>
                    <Card>
                       <div className='search_arrow'>
                            <CustomToggle eventKey="0">
                                <div>
                                    Technology <GrAddCircle className='collapse_icon'/>
                                </div>
                            </CustomToggle>
                            <div className='search_arrow_arrows'>
                                <IoArrowBack />
                                <IoArrowForward />
                            </div>
                            
                        </div>
                        <Accordion.Collapse eventKey="0">
                            <div className="row">
                                {search.map( list  =>(
                                    <div onClick={showBooking} setClassId={list.id} className={booking || profile ? "col-lg-3 class_home filter_back" : 'col-lg-3 class_home'} key={list.id}>
                                        <sub>{list.category}</sub>
                                        <img src={list.filelocation} alt="class images"/>
                                        <h6>{list.title}</h6>
                                        <p>₦{list.cost} NGN</p>
                                    </div>
                                ))}
                            
                            </div>
                        </Accordion.Collapse>
                    </Card>
                    
                </Accordion>
            </div>


        </>
    )
}
