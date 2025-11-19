"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function ListIcons() {
    return (
        <div>
            <Container className="mt-5 mb-5 p-5">
                <Row className="text-center gap-sm-5  p-4 mr-auto ">
                    {[1, 2, 3, 4, 5].map((num, index) => (
                        <Col key={index}  md={2} className="d-flex flex-column align-items-center mb-4">
                            <img src={`/image/icones/Vector (${num}).png`} alt={`Icon ${num}`} className="img-fluid mb-3" />
                        </Col>
                    ))}

                </Row>
            </Container></div >
    )
}
