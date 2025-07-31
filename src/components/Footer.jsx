import React from 'react';

// --- SVG Icons for Social Media ---
// Using inline SVGs makes the component self-contained and avoids dependency on icon libraries like Font Awesome.

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A48.978 48.978 0 0112 2.163zm0 3.482c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162S15.405 5.645 12 5.645zm0 9.923c-2.079 0-3.762-1.682-3.762-3.762s1.683-3.762 3.762-3.762 3.762 1.682 3.762 3.762-1.683 3.762-3.762 3.762zM16.802 6.11a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
    </svg>
);

const TikTokIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.94-6.37-2.96-2.2-2.95-2.2-6.82 0-9.78 1.59-2.1 4.3-3.29 6.92-3.15 1.05.05 2.09.34 3.08.83v4.12c-.91-.4-1.86-.58-2.8-.59-1.43-.02-2.85.39-4.04 1.34-1.19.95-1.85 2.36-1.85 3.85 0 2.81 2.17 5.01 4.91 5.01 2.2 0 4.13-1.49 4.67-3.55.12-.42.18-.85.18-1.28v-9.3z" />
    </svg>
);


export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800">
            {/* --- Main Footer Content Grid --- */}
            {/* The grid is responsive: 1 column on mobile, 2 on small screens, and 4 on medium screens and up. */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                {/* --- Column 1: Brand and App Links --- */}
                <div>
                    <h1 className="text-3xl font-bold flex items-center">
                        Order<span className="ml-1 bg-gray-900 text-white px-2 py-1 rounded">UK</span>
                    </h1>
                    <div className="flex mt-4 space-x-2">
                        {/* NOTE: Replaced Next.js <Image> with <img> and used placeholders */}
                        <img src="https://placehold.co/120x40/000000/FFFFFF?text=App+Store" alt="Download on the App Store" className="h-10 w-auto" />
                        <img src="https://placehold.co/120x40/000000/FFFFFF?text=Google+Play" alt="Get it on Google Play" className="h-10 w-auto" />
                    </div>
                    <p className="text-sm mt-4 text-gray-600">
                        Company # 490039-445, Registered with<br />
                        House of companies.
                    </p>
                </div>

                {/* --- Column 2: Newsletter and Social --- */}
                <div>
                    <h2 className="font-semibold text-lg mb-3">Get Exclusive Deals</h2>
                    <div className="flex flex-col space-y-2">
                        {/* UPDATED THIS SECTION */}
                        <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden">
                            <input type="email" placeholder="youremail@gmail.com" className="flex-1 px-4 py-2 text-sm outline-none bg-transparent min-w-0" />
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold transition-colors duration-300 flex-shrink-0">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 px-1">
                            we won't spam, read our <a href="#" className="underline hover:text-orange-500">email policy</a>
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-6 text-gray-600">
                        <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FacebookIcon /></a>
                        <a href="#" className="hover:text-orange-500 transition-colors duration-300"><InstagramIcon /></a>
                        <a href="#" className="hover:text-orange-500 transition-colors duration-300"><TikTokIcon /></a>
                    </div>
                </div>

                {/* --- Column 3: Legal Pages --- */}
                <div>
                    <h3 className="text-black font-semibold text-lg mb-3">Legal Pages</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Terms and conditions</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Privacy</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Cookies</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Modern Slavery Statement</a></li>
                    </ul>
                </div>

                {/* --- Column 4: Important Links --- */}
                <div>
                    <h3 className="text-black font-semibold text-lg mb-3">Important Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Get help</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Add your restaurant</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Sign up to deliver</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 hover:underline">Create a business account</a></li>
                    </ul>
                </div>

            </div>

            {/* --- Bottom Bar: Copyright and Links --- */}
            {/* This section stacks vertically on mobile and becomes a row on medium screens and up. */}
            <div className="bg-gray-900 text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-2 md:space-y-0">
                    <p>&copy; {new Date().getFullYear()} Order.uk, All Rights Reserved.</p>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Pricing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
