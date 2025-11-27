/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { AppDispatch, RootState } from '../redux/store';
import { Container, Row, Col } from 'react-bootstrap';
import SwiperProduct from './slise/page';
import { CiHeart } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import { addToCart } from '../redux/cardSlice';
import Link from 'next/link';

export default function ProductLest() {
    const items = useSelector((state: RootState) => state.products);
    const dispatch: AppDispatch = useDispatch();
    const productsArray = items?.items || [];
    const [filterCategory, setFilterCategory] = useState("");
    const [filterOn, setFilterOn] = useState("");

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const categoryFilter = [...new Set(productsArray.map(item => item.category))];

    const filterPrice = productsArray.filter(item => {
        const filterCategoryFoll = filterCategory ? item.category === filterCategory : true;

        return (filterOn === "0 to 100"
            ? item.price >= 0 && item.price <= 100
            : filterOn === "100 to 300"
                ? item.price > 100 && item.price <= 300
                : filterOn === "+300"
                    ? item.price > 300
                    : true) && filterCategoryFoll;
    });

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Product List</h1>
            <hr />
            <SwiperProduct />
            <hr />

            <h2 className="mt-4">Total product : {filterPrice.length}</h2>

            <div className="text-center my-4 d-flex justify-content-around align-items-center mt-5">
                <div>
                    <h4>Filter by Price</h4>
                    <select
                        className="form-select mb-3"
                        value={filterOn}
                        onChange={(e) => setFilterOn(e.target.value)}
                        style={{ width: "100%", color: '#74C0FC' }}>
                        <option value="">All prices</option>
                        {["0 to 100", "100 to 300", "+300"].map((priceRange) => (
                            <option key={priceRange} value={priceRange}>
                                {priceRange}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <h4>Filter by Category</h4>
                    <select
                        className="form-select mb-3"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        style={{ width: "100%", color: '#74C0FC' }}>
                        <option value="">All Products</option>
                        {categoryFilter.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <Container>
                <Row>
                    {items.loading && <p>Loading...</p>}
                    {items.error && <p>Error: {items.error}</p>}
                    {!items.loading && !items.error &&
                        (filterPrice.length === 0 ? (
                            <p>No products found for the selected filters.</p>
                        ) : (
                            filterPrice.map((product) => (

                                <Col
                                    key={product.id}
                                    xs={12}
                                    sm={12}
                                    md={4}
                                    lg={3}
                                    className="mb-4 d-flex justify-content-center"
                                >
                                    <div className="card h-100 w-100 text-center">
                                        <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }} >
                                            <img
                                                src={product.image}
                                                className="card-img-top p-3"
                                                alt={product.title}
                                                style={{ width: "150px", height: "150px", objectFit: "contain", margin: "auto" }}
                                            />
                                        </Link>


                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {product.title.length > 20
                                                    ? product.title.slice(0, 20) + "..."
                                                    : product.title}
                                            </h5>
                                            <p className="card-text text-muted">
                                                {product.description.length > 50
                                                    ? product.description.slice(0, 50) + "..."
                                                    : product.description}
                                            </p>
                                            <p className="card-text fw-bold">${product.price}</p>
                                        </div>
                                        <div className="card-footer bg-transparent border-top-0 d-flex justify-content-center gap-2 p-3">
                                            <button
                                                className="btn btn-outline-danger btn-sm rounded-5"
                                                title="Add to Wishlist"
                                            >
                                                <CiHeart style={{ fontSize: "19px" }} />
                                            </button>
                                            <button
                                                className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                                                onClick={() =>
                                                    dispatch(
                                                        addToCart({
                                                            id: product.id,
                                                            title: product.title,
                                                            price: product.price,
                                                            image: product.image,
                                                            category: product.category,
                                                        })
                                                    )
                                                }
                                            >
                                                <SlBasket style={{ fontSize: "19px" }} />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        ))}
                </Row>
            </Container>
        </div>
    );
}
