'use client';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineLike } from 'react-icons/ai';
import { FaList } from 'react-icons/fa';
import { SiLastpass } from "react-icons/si"; import { CiShoppingBasket } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import "./NaveBary.css";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
export default function NaveBary() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const cardlength = useSelector((state: RootState) => state.card.length);
  return (
    <div>
      <Navbar data-bs-theme="light" className='flex justify-content-around align-items-center'>
        <Container>
          <div className='d-flex justify-around align-items-center w-100'>

            <Navbar.Brand href="/">Bandage</Navbar.Brand>
            <Nav className="me-auto d-none d-sm-flex">
              <Link href="/" className='nav-link'>Home</Link>
              <Link href="/productlist" className='nav-link'>Shop</Link>
              <Link href="#pricing" className='nav-link'>Pricing</Link>
            </Nav>
          </div>
          <div className='d-flex justify-content-between align-items-center gap-4 margin-left-5'>
            <AiOutlineLike style={{ fontSize: "25px" }} className='d-none d-sm-flex' />
            <Link href="/productcard" className="position-relative text-decoration-none me-3">
              <CiShoppingBasket style={{ fontSize: "25px" }} className="d-none d-sm-flex text-dark" />
              {cardlength > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none d-sm-flex"
                  style={{ fontSize: "0.6rem" }}
                >
                  {cardlength}
                </span>
              )}
            </Link>
            <CiLogin style={{ fontSize: "25px" }} className='d-none d-sm-flex' />

            <button className='  link-offset-3-hover transition ease-in-out duration-300  btn d-sm-none transform-view '
              onClick={handleToggle}>
              {show ?
                <SiLastpass style={{ fontSize: "25px" }} />

                :
                <FaList style={{ fontSize: "25px" }} />
              }
            </button>

          </div>
        </Container>


      </Navbar>


      <div data-aos="fade-up">
        <div
          className={`d-sm-none w-100 d-flex justify-content-center align-middle forced-colors transform-gpu ease-linear-5s navelest   ${show ? 'd-block' : 'd-none'}`}

        >
          <Nav className="flex-column">
            <div className='d-flex align-items-center'>
              <Nav.Link href="/" className='text-info'>
                Home
              </Nav.Link>
              <Nav.Link href="/productlist" className='text-info'>
                Shop
              </Nav.Link>
              <Nav.Link href="#pricing" className='text-info'>
                Pricing
              </Nav.Link></div>
            <div className=' d-flex alighn-align-items-center justify-content-center '>
              <Nav.Link href="#pricing" className='text-info'>
                <AiOutlineLike style={{ fontSize: "25px" }} />
              </Nav.Link>
              <Nav.Link href="#pricing" className='position-relative  text-info'>
                <CiShoppingBasket style={{ fontSize: "25px" }} />
                {cardlength > 0 && (
                  <span
                    className="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-warning"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {cardlength}
                  </span>)}
              </Nav.Link>
              <Nav.Link href="#pricing" className='text-info'>
                <CiLogin style={{ fontSize: "25px" }} />
              </Nav.Link>
            </div>

          </Nav>
        </div>
      </div>

    </div >

  )
}