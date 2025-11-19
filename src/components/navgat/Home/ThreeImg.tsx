import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function ThreeImg() {
    return (
        <div>
            <Container className='mt-5 d-flex justify-content-center align-items-center p-5'>
                <Row>

                    <Col xs={12} md={6} className='text-center mb-4'>
                        <div className='position-relative'>
                            <img
                                src="image/media bg-cover (1).png"
                                alt="Image 1"
                                className='img-fluid rounded'
                                style={{ height: '500PX', width: '100%' }}
                            />
                            <div
                                className='position-absolute  bg-info text-white p-3 rounded m-3 text-start  h- w-75 text-sm-start   d-flex alighn-items-center justify-content-end flex-column' style={{ opacity: 0.9, width: '70%', maxWidth: '70%', height: '30%', bottom: '-15px', left: '-15px' }}                            >
                                <h4 >Top Product Of the Week</h4>
                                <Button variant="outline-light " className=' mb-4'  >EXPLORE ITEMS</Button>

                            </div>
                        </div>
                    </Col>


                    <Col xs={12} md={6}>
                        <Row className='g-4 flex-column'>


                            <Col xs={12}>
                                <div className='position-relative'>
                                    <img
                                        src="image/media bg-cover.png"
                                        alt="Image 2"
                                        className='img-fluid rounded'
                                        style={{ height: '235px', width: '100%' }}
                                    />
                                    <div
                                        className='position-absolute  bg-info text-white p-3 rounded m-3 text-start  w-75 text-sm-start   d-flex alighn-items-center justify-content-end flex-column'
                                        style={{ opacity: 0.9, bottom: '-16px', left: '-15px' }}                                    >
                                        <h4>Top Product Of the Week</h4>
                                        <Button variant="outline-light "  >EXPLORE ITEMS</Button>

                                    </div>
                                </div>
                            </Col>

                            {/* صورة 3 */}
                            <Col xs={12}>
                                <div className='position-relative'>
                                    <img
                                        src="image/unsplash_MKvjc2kar7Q.jpg"
                                        alt="Image 3"
                                        className='img-fluid rounded'
                                        style={{ height: '235px', width: '100%' }}
                                    />
                                    <div
                                        className='position-absolute  bg-info text-white p-3 rounded m-3 text-start  w-75 text-sm-start   d-flex alighn-items-center justify-content-end flex-column'
                                        style={{ opacity: 0.9, bottom: '-16px', left: '-15px' }}                                    >
                                        <h4>Top Product Of the Week</h4>
                                        <Button variant="outline-light "  >EXPLORE ITEMS</Button>

                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
