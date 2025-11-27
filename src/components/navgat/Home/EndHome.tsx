/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CiHeart } from 'react-icons/ci'
import { FaBookOpen, FaChartBar, FaClock, FaDownload, FaRegEye, FaStar } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'
const icons = [CiHeart, FaRegEye, SlBasket]

export default function EndHome() {
  const colorIcons = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
  ]
  return (
    <div>

      <div className='text-center my-5'>
        <p className='text-info'>Practice Advice</p>
        <h1>Featured Posts</h1>
      </div>

      <Container className="my-5 p-5 d-none d-md-flex ">

        <Row>
          <Col xs={12} md={12} lg={6} className='text-center my-5'>
            <Row>
              <Col md={5} className='text-center my-5  '>
                <div style={{ position: 'relative' }}>
                  <img src="/image/e403f3234352fbe297a33da49162435ddfc7ebb3.jpg" alt="Community" className='img-fluid' />
                  <div style={{
                    position: 'absolute'
                    , top: '20px', left: '50px', gap: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', justifyContent: 'space-between', width: '90px', height: '85%'
                  }}>
                    < div className='w-75 ' style={{ position: 'relative', right: '50px' }}>
                      <p className='text-center text-white bg-danger p-2 w-75  ' >sale</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'space-around', gap: '10px' }}>
                      {icons.map((Icon, index) => (
                        <span key={index} className='d-flex justify-content-center align-items-center ' style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f8f9fa', marginBottom: '10px', }}>
                          <Icon />
                        </span>
                      ))
                      }

                    </div>
                  </div>
                </div>
              </Col>
              <Col >
                <div className='p-2 w-100 mt-5  '>
                  <div className='d-flex flex-sm-row flex-column-reverse justify-content-between align-items-center gap-3 gap-sm-1 w-100 '>
                    <div >
                      <h5 className='text-primary text-start'>English Department</h5>
                    </div>
                    <div className='d-flex justify-content-center gap-2 align-content   ' style={{ width: '80px', height: '30px', backgroundColor: "black", borderRadius: '50px' }}>
                      <p style={{ color: 'white' }}>4.5</p>
                      <FaStar style={{ color: 'yellow', fontSize: '15px', marginTop: "5px" }} />
                    </div>
                  </div>


                </div>
                <div className='text-start '>
                  <h3> Graphic Design </h3>
                  <p>
                    We focus on ergonomics and
                    meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className='text-start p-2 gap-3 d-flex justify-around align-items-center'>
                    <FaDownload style={{ color: 'gray', fontSize: '15px' }} />
                    <span>
                      15 Sales
                    </span>
                  </div>
                  <div className='text-start  gap-3 d-flex justify-around align-items-center'>
                    <span style={{ color: 'grey', fontSize: '15px', fontWeight: "bold" }}>
                      $6.48
                    </span>
                    <span style={{ color: 'green', fontSize: '15px', fontWeight: "bold" }}>
                      $16.48
                    </span>
                  </div>
                </div>
                <div className='d-flex justify-content-start align-items-start flex-wrap gap-2 mt-3'>
                  {colorIcons.map((color, index) => (
                    <span key={index} className='d-flex justify-content-start  align-items-center ' style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: color, marginBottom: '10px' }}>
                    </span>
                  ))}
                </div>
                <div>
                  <div className='d-flex justify-content-between align-items-center mt-3'>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaBookOpen style={{ color: 'red', fontSize: '15px' }} />
                      <span> 12 Lessons</span>
                    </div>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaChartBar style={{ color: 'blue', fontSize: '15px' }} />
                      <span> 4.5 Rating</span>
                    </div>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaClock style={{ color: 'green', fontSize: '15px' }} />
                      <span> 1h 30m</span>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-start pt-4 '>           <Button variant="outline-info" className=' rounded-5 text-h-light'>Learn More {'>'}</Button>
                </div>

              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12} lg={6} className='text-center my-5'>
            <Row>
              <Col md={5} className='text-center my-5'>
                <div style={{ position: 'relative' }}>
                  <img src="/image/d2676d3818335f67670e7c2f65d5314312756628.jpg" alt="Community" className='img-fluid' />
                  <div style={{
                    position: 'absolute'
                    , top: '20px', left: '50px', gap: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', justifyContent: 'space-between', width: '90px', height: '85%'
                  }}>
                    < div className='w-75 ' style={{ position: 'relative', right: '50px' }}>
                      <p className='text-center text-white bg-danger p-2 w-75  ' >sale</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'space-around', gap: '10px' }}>
                      {icons.map((Icon, index) => (
                        <span key={index} className='d-flex justify-content-center align-items-center ' style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f8f9fa', marginBottom: '10px', }}>
                          <Icon />
                        </span>
                      ))
                      }

                    </div>
                  </div>
                </div>
              </Col>
              <Col >
                <div className='p-2 w-100 mt-5  '>
                  <div className='d-flex flex-sm-row flex-column-reverse justify-content-between align-items-center gap-3 gap-sm-1 w-100 '>
                    <div >
                      <h5 className='text-primary text-start'>English Department</h5>
                    </div>
                    <div className='d-flex justify-content-center gap-2 align-content   ' style={{ width: '80px', height: '30px', backgroundColor: "black", borderRadius: '50px' }}>
                      <p style={{ color: 'white' }}>4.5</p>
                      <FaStar style={{ color: 'yellow', fontSize: '15px', marginTop: "5px" }} />
                    </div>
                  </div>


                </div>
                <div className='text-start '>
                  <h3> Graphic Design </h3>
                  <p>
                    We focus on ergonomics and
                    meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className='text-start p-2 gap-3 d-flex justify-around align-items-center'>
                    <FaDownload style={{ color: 'gray', fontSize: '15px' }} />
                    <span>
                      15 Sales
                    </span>
                  </div>
                  <div className='text-start  gap-3 d-flex justify-around align-items-center'>
                    <span style={{ color: 'grey', fontSize: '15px', fontWeight: "bold" }}>
                      $6.48
                    </span>
                    <span style={{ color: 'green', fontSize: '15px', fontWeight: "bold" }}>
                      $16.48
                    </span>
                  </div>
                </div>
                <div className='d-flex justify-content-start align-items-start flex-wrap gap-2 mt-3'>
                  {colorIcons.map((color, index) => (
                    <span key={index} className='d-flex justify-content-start  align-items-center ' style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: color, marginBottom: '10px' }}>
                    </span>
                  ))}
                </div>
                <div>
                  <div className='d-flex justify-content-between align-items-center mt-3'>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaBookOpen style={{ color: 'red', fontSize: '15px' }} />
                      <span> 12 Lessons</span>
                    </div>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaChartBar style={{ color: 'blue', fontSize: '15px' }} />
                      <span> 4.5 Rating</span>
                    </div>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaClock style={{ color: 'green', fontSize: '15px' }} />
                      <span> 1h 30m</span>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-start pt-4 '>     
                             <Button variant="outline-info" className=' rounded-5 text-h-light'>Learn More {'>'}</Button>
                </div>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
      <Container className=" p-4  d-flex d-md-none ">

        <Row>
          <Col xs={12} md={12} lg={6} className='text-center my-5'>
            <Row>
              <Col md={5} className='text-center d-flex d-sm-none'>
                <div style={{ position: 'relative' }}>
                  <img src="/image/7e03d89b289c20edd2275a08f2d2df5371ff7f8c.jpg" alt="Community" className='img-fluid' width={500} />
                  <div style={{
                    position: 'absolute'
                    , top: '20px', left: '50px', gap: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', justifyContent: 'space-between', width: '90px', height: '85%'
                  }}>
                    < div className='w-75 ' style={{ position: 'relative', right: '50px' }}>
                      <p className='text-center text-white bg-danger p-2 w-75  ' >New</p>
                    </div>

                  </div>
                </div>
              </Col>
              <Col >
                <div className='p-2 w-100   '>
                  <div className='d-flex  justify-content-between align-items-center gap-2  w-75 '>
                    <Link href="https://www.google.com" className="text-decoration-none text-Info">
                      Google
                    </Link>
                    <Link href="https://www.twitter .com" className="text-decoration-none text-Info">
                      Twitter
                    </Link>
                    <Link href="https://www.facebook.com" className="text-decoration-none text-Info">
                      Facebook
                    </Link>
                  </div>


                </div>
                <div className='text-start '>
                  <h3> Loudest à la Madison #1
                    (L'integral) </h3>
                  <p>
                    We focus on ergonomics and
                    meeting you where you work. It's
                    only a keystroke away.
                  </p>


                </div>

                <div>
                  <div className='d-flex justify-content-between align-items-center mt-3'>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaBookOpen style={{ color: 'red', fontSize: '15px' }} />
                      <span> 12 Lessons</span>
                    </div>

                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaClock style={{ color: 'blue', fontSize: '15px' }} />
                      <span> 1h 30m</span>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-start pt-4 '>
                  <Button variant="btn outline-info" className=' rounded-5 text-h-light'>Learn More <span className='text'> {'>'} </span> </Button>
                </div>

              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12} lg={6} className='text-center my-5'>
            <Row>
              <Col md={5} className='text-center d-flex d-sm-none'>
                <div style={{ position: 'relative' }}>
                  <img src="/image/5267105824e3c5c922730b2e509c49e6b03b75f8.jpg" alt="Community" className='img-fluid' style={{ width: '330px', height: "200" }} />
                  <div style={{
                    position: 'absolute'
                    , top: '20px', left: '50px', gap: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', justifyContent: 'space-between', width: '90px', height: '85%'
                  }}>
                    < div className='w-75 ' style={{ position: 'relative', right: '50px' }}>
                      <p className='text-center text-white bg-danger p-2 w-75  ' >New</p>
                    </div>

                  </div>
                </div>
              </Col>
              <Col >
                <div className='p-2 w-100   '>
                  <div className='d-flex  justify-content-between align-items-center gap-2  w-75 '>
                    <Link href="https://www.google.com" className="text-decoration-none text-Info">
                      Google
                    </Link>
                    <Link href="https://www.twitter .com" className="text-decoration-none text-Info">
                      Twitter
                    </Link>
                    <Link href="https://www.facebook.com" className="text-decoration-none text-Info">
                      Facebook
                    </Link>
                  </div>


                </div>
                <div className='text-start '>
                  <h3> Loudest à la Madison #1
                    (L'integral) </h3>
                  <p>
                    We focus on ergonomics and
                    meeting you where you work. It's
                    only a keystroke away.
                  </p>


                </div>

                <div>
                  <div className='d-flex justify-content-between align-items-center mt-3'>
                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaBookOpen style={{ color: 'red', fontSize: '15px' }} />
                      <span> 12 Lessons</span>
                    </div>

                    <div className='d-flex justify-content-start align-items-center gap-2'>
                      <FaClock style={{ color: 'blue', fontSize: '15px' }} />
                      <span> 1h 30m</span>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-start pt-4 '>
                  <Button variant="btn outline-info" className=' rounded-5 text-h-light'>Learn More <span className='text'> {'>'} </span> </Button>
                </div>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container >

    </div >
  )
}
