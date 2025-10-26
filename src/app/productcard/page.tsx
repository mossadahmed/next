'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../product/redux/store';
import {
    incrementQuantity,
    decrementQuantity,
    cleacard,
    deleteCart,
} from '../product/redux/cardSlice';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

export default function BasketPage() {
    const cart = useSelector((state: RootState) => state.card);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <Container className="py-5 text-center">
                <h3>🛒 السلة فارغة</h3>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <h2 className="mb-4">Bascket Card </h2>

            <Row className="g-4">
                {cart.map((product) => (
                    <Col md={12} key={product.id}>
                        <Card className="p-3 d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    style={{ width: 80, height: 80, objectFit: 'contain' }}
                                />
                                <div>
                                    <h5>{product.title}</h5>
                                    <p className="mb-0 text-primary">${product.price.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => dispatch(decrementQuantity(product.id))}
                                >
                                    -
                                </Button>
                                <span>{product.quantity}</span>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => dispatch(incrementQuantity(product.id))}
                                >
                                    +
                                </Button>
                            </div>

                            <h6 className="text-success mb-0">
                                ${(product.price * product.quantity).toFixed(2)}
                            </h6>

                            <Button
                                variant="outline-danger"
                                onClick={() => dispatch(deleteCart(product.id))}
                            >
                                <FaTrash />
                            </Button>
                        </Card>
                        <Button
                            variant="outline-danger"
                            onClick={() => dispatch(cleacard())}
                        >
                            clear
                        </Button>
                    </Col>
                ))}
            </Row>

            <div className="text-end mt-4">
                <h4>الإجمالي: ${totalPrice.toFixed(2)}</h4>
                <Button variant="success"></Button>
            </div>
        </Container>
    );
}
