"use client";
import { Button, Col, Container, Row } from 'react-bootstrap';
import ListIcons from './ListIcons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/app/redux/productSlice';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '@/app/redux/store';
import Link from 'next/link';
import ListIcon from './ListIcon';
import ThreeImg from './ThreeImg';
import EndHome from './EndHome';
import Product from '@/components/Productdetails';

export default function Home() {
    const { items, loading, error } = useSelector((state: RootState) => state.products);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <Container className=" p-5 ">
                <Row
                    className="align-items-center p-5"
                    style={{
                        backgroundColor: 'rgba(150, 233, 251, 1)',
                        borderRadius: '20px',
                    }}
                >
                    {/* Text Section */}
                    <Col xs={12} md={6} className="text-center text-md-start px-4 text">
                        <h1 className="fw-bold mb-3">NEW COLLECTION</h1>
                        <p className="lead mb-4" style={{ color: 'gray' }}>
                            We know how large objects will act,
                            but things on a small scale.

                        </p>
                        <Link href="/apout">
                            <Button variant="primary">Lern More</Button>

                        </Link>

                    </Col>

                    {/* Image Section */}
                    <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
                        <img
                            src="/image/col-md-6.png"
                            alt="Hero"
                            className="img-fluid"
                            style={{ maxHeight: '400px', objectFit: 'contain' }}
                        />
                    </Col>
                </Row>
            </Container>
            <ListIcons />
            <ThreeImg />

            <Container >
                <Row>
                    <h2 className="text-center my-5">The Products </h2>

                    {!loading && !error && items.slice(0, 8).map((product) => (
                        <Col key={product.id} xs={12} md={3} className="mb-4 d-flex justify-content-center mb-4" title="Click to view details">

                            <Product
                                id={product.id}
                                image={product.image}
                                title={product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
                                description={product.description.length > 50 ? product.description.slice(0, 50) + "..." : product.description}
                                price={product.price}
                                category={product.category}
                                className="w-100"
                                imageStyle={{ width: '150px', height: '150px' }}
                            />

                        </Col>

                    ))}
                    <Link href='/productlist' className="  text-decoration-none text-success hover:*:text- " >
                        <Button variant="outline-primary" className="btn w-50 d-flex justify-content-center align-items-center mx-auto my-3" >

                            Click to view details

                        </Button>
                    </Link>


                </Row>

            </Container>
            <Container className="my-5">
                <Row className="text-star td-flex flex-column-reverse flex-sm-row">
                    <Col xs={12} md={7} className="text-center mb-4 mb-md-0 gap-5 mt-5 p-5">
                        <img
                            src="/image/hero-cover-212a.png"
                            alt="Community"
                            className="img-fluid"
                            style={{ objectFit: 'contain' }}
                            width={600}
                        />
                    </Col>
                    <Col xs={12} md={5} className=" text-md-start d-flex flex-column justify-content-center p-5" >
                        <h5 className='text-primary'>Featured Products </h5>
                        <h1 className="mb-4">We love what we do</h1>
                        <p className="lead mb-4 fw-bolder">
                            Problems trying to resolve the conflict between
                            the two major realms of Classical physics:
                            Newtonian mechanics.
                            <br />
                            <br />
                            Problems trying to resolve the conflict between
                            the two major realms of Classical physics:
                            Newtonian mechanics                         </p>


                    </Col>
                </Row>
            </Container>
            <ListIcon />
            <EndHome />

        </div>
    );
}
