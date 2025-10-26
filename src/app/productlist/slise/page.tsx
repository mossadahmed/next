'use client';

import { Col, Container, Row } from 'react-bootstrap';


export default function SwiperProduct() {



    const imageSwiper = [
        "/image/pexels-eunhyuk-ahn-1478827-2907034.jpg",
        "/image/pexels-anastasiya-gepp-654466-1462637.jpg",
        "/image/pexels-eduardo-romero-817034-1750776.jpg",
        "/image/pexels-frendsmans-1926769.jpg",
        "/image/pexels-th-c-le-h-u-605106-1390602.jpg",
        "/image/pexels-kowalievska-1055691.jpg",


    ]
    return (
        <div >
            <Container className="mt-5 mb-5 text-center">
                <Row>
                    {imageSwiper.map((item, index) => (

                        <Col xs={6} md={4} lg={2} className="card text-center mb-3 d-flex  flex-column-reverse d-flex justify-content-center  w-" key={index}>

                            <div className=" overflow-hidden rounded flex-r" style={{ position: 'relative' }}>

                                <img
                                    src={item}
                                    alt={`Random Clothes ${index + 1}`}
                                    className="w-full h-full"
                                    style={{ transition: 'transform 0.3s ease', zIndex: -1 }}
                                    width={200}
                                    height={200}
                                />

                                <div
                                    className="text-center font-bold me-sm-5"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'white',
                                    }}
                                >

                                    <h5>Item : {index + 1}</h5>
                                </div>
                            </div>
                        </Col>



                    ))
                    }
                </Row>
            </Container>
        </div >

    );
}
