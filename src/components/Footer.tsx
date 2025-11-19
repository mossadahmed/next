import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
    return (
        <footer className=" text-darck pt-5 pb-4 mt-5 border-top border-3  " >
            <div className="container text-md-start">
                <div className="row  text-start">
                    {/* Logo & Description */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-darck">MyBrand</h5>
                        <p>We bring you the latest fashion trends in Link modern way.</p>
                    </div>

                    {/* Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-darck">Quick Links</h5>
                        <p><Link href="/" className="text-decoration-none text-darck" style={{ color: "black" }}>Home</Link></p>
                        <p><Link href="/productlist" className="text-decoration-none text-darck" style={{ color: "black" }}>Shop</Link></p>
                        <p><Link href="#" className="text-decoration-none text-darck" style={{ color: "black" }}>About</Link></p>
                        <p><Link href="#" className="text-decoration-none text-darck" style={{ color: "black" }}>Contact</Link></p>
                    </div>
                    {/* Contact Info */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-darck">Contact</h5>
                        <p>Email: support@mybrand.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>


                <hr className="my-3" />

                {/* Footer Bottom */}
                <div className="row align-items-center justify-content-center">


                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-md-left text-center mb-0 ">
                                © {new Date().getFullYear()} MyBrand. All rights reserved.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
