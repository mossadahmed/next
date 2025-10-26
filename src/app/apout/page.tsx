'use client';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="container my-5">
            <div className="bg-info text-light p-5 rounded shadow">
                <h1 className="mb-4">About Us</h1>
                <p>
                    Welcome to our website! We are committed to providing high-quality products and services to our customers.
                </p>
                <p>
                    Our mission is to deliver great value and create a satisfying experience for everyone who visits our site.
                </p>
                <p>
                    Whether you&apos;re browsing, buying, or just curious, we&apos;re here to help you every step of the way.
                </p>

                <ul className="list-group my-4">
                    <li className="list-group-item bg-light">✓ Trusted by thousands of customers</li>
                    <li className="list-group-item bg-light">✓ Fast and secure delivery</li>
                    <li className="list-group-item bg-light">✓ Friendly support team</li>
                </ul>

                <Link href="/" className="btn btn-light btn-lg mt-3">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
