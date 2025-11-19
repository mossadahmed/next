import React from 'react'

export default function ListIcon() {
    return (
        <div className='container my-5 text-center'>
            <div className='text-center my-5'>
                <h5 className='text-secondary'>Featured Products</h5>
                <h2>THE BEST SERVICES</h2>
                <p className='text-secondary'>Problems trying to resolve the conflict between </p>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-5 flex-wrap'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src="/image/icones/Vector (7).png" alt="Community" className='img-fluid' style={{ objectFit: 'contain', width: '100px', height: '100px' }} />
                    <h5 >Hack Growth</h5>
                    <p  className='text-secondary'>Overcame any hurdle or any other problem.</p>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src="/image/icones/Vector (8).png" alt="Community" className='img-fluid' style={{ objectFit: 'contain', width: '100px', height: '100px' }} />
                    <h5>Concrete</h5>
                    <p  className='text-secondary'>Defalcate is most focused in helping you discover <br /> your most beautiful smile</p>

                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src="/image/icones/bx_bxs-book-reader.png" alt="Community" className='img-fluid' style={{ objectFit: 'contain', width: '100px', height: '100px' }} />
                    <h5>Easy Wins</h5>
                    <p  className='text-secondary'>Get your best looking smile now!</p>
                </div>
            </div>
        </div>
    )
}
