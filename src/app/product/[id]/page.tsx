// app/product/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
    Container,
    Row,
    Col,
    Button,
    Badge,
    Spinner,
    Card,
} from 'react-bootstrap';
import {
    FaShoppingCart,
    FaHeart,
    FaShareAlt,
    FaArrowLeft,
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/productSlice';
import { addToCart } from '../redux/cardSlice';

interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => setProduct(res.data))
            .catch(() => setProduct(null))
            .finally(() => setLoading(false));
        dispatch(fetchProducts())
    }, [params.id]);

    const renderStars = (rate: number) => {
        const fullStars = Math.floor(rate);
        const hasHalfStar = rate % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rate);

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="text-warning" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="text-warning" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="text-muted" />
                ))}
            </>
        );
    };

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" />
            </Container>
        );
    }

    if (!product) {
        return (
            <Container className="text-center py-5">
                <h3>المنتج غير موجود</h3>
                <Button variant="outline-primary" onClick={() => router.push('/productlist')}>
                    الرجوع للمنتجات
                </Button>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row className="g-5">
                {/* صورة المنتج */}
                <Col md={6} className="text-center">
                    <Card className="shadow-sm p-3">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid"
                            style={{ maxHeight: 400, objectFit: 'contain' }}
                        />
                        <Badge bg="info" className="mt-3 text-capitalize">
                            {product.category}
                        </Badge>
                    </Card>
                </Col>

                {/* تفاصيل المنتج */}
                <Col md={6}>
                    <h2 className="fw-bold mb-3">{product.title}</h2>
                    <h4 className="text-primary mb-3">${product.price.toFixed(2)}</h4>

                    <div className="d-flex align-items-center mb-3 gap-2">
                        {renderStars(product.rating.rate)}
                        <span className="text-muted">({product.rating.count} reviews)</span>
                    </div>

                    <p className="text-muted mb-4">{product.description}</p>

                    <Row className="g-3 mb-4">
                        <Col sm={6}>
                            <Button variant="outline-primary"
                                onClick={() => { dispatch(addToCart(product)) }}

                                className="w-100 d-flex align-items-center justify-content-center gap-2">
                                <FaShoppingCart />
                                Add To Card                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button variant="outline-danger" className="w-100 d-flex align-items-center justify-content-center gap-2">
                                <FaHeart />
                                Wishlist
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button
                                variant="outline-warning"
                                className="w-100 d-flex align-items-center justify-content-center gap-2"
                                onClick={() =>
                                    navigator.share &&
                                    navigator.share({
                                        title: product.title,
                                        text: product.description,
                                        url: `${product.id}`,
                                    })
                                }
                            >
                                <FaShareAlt />
                                share
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button
                                variant="secondary"
                                className="w-100 d-flex align-items-center justify-content-center gap-2"
                                onClick={() => router.push('/productlist')}
                            >
                                <FaArrowLeft />
                                Back To Shop Bage                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
