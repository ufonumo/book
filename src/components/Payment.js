import {  Switch, Route,Link} from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai"
import { FiCreditCard } from "react-icons/fi"
import { GiPadlock } from "react-icons/gi"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Payment({profile , showProfile}) {
    return (
        <div>
            <div className={profile ? " col-lg-6 ml-auto booking profile active payment_height": "col-lg-6 ml-auto profile booking d-none"}>
                <div className="profile_padding">
                    <Link className=''><AiOutlineClose onClick={showProfile} className='profile_response_btn '/></Link>
                    <div className="row payment mt-5">
                        <div className="pr-3 chat_box">
                              <small >azeezat@gmail.com</small>
                              <p >Pay <b>NGN 10,000.00</b></p>

                        </div>

                        <Form className='payment  mx-auto mt-4 p-3'>
                            <h5 className='text-center'>Enter your card details to pay</h5>

                            <InputGroup className="mb-2 pt-3">
                                <FormControl type='number'  id="inlineFormInputGroup" placeholder="CARD NUMBER" />

                                <InputGroup.Append>
                                    <InputGroup.Text><FiCreditCard/></InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Row className='pt-4'>
                                <Col>
                                    
                                    <Form.Control  placeholder='CARD EXPIRY'/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder='CVV' />
                                </Col>
                            </Row>
                            <div className='mt-3 text-center '>
                                <button type='button' onClick={showProfile} className='col-12 booking_tutor_profile_btn payment_btn'>Pay NGN 10,000.00</button>
                            </div>

                            <div className="text-center payment mt-3">
                                <p><GiPadlock/> Secured by</p> 
                                <b>paystack</b>
                            </div>

                        </Form>
                
                    </div>

                </div>      

            </div>
        
        </div>
    )
}
