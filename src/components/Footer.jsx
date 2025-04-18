import Link from 'next/link';
import React from 'react';
import{Instagram, Twitter, Facebook} from 'lucide-react';
const Footer = () => {
    return (
      <footer className=" text-gray-400 py-8 border-t border-gray-700 mt-8  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h1 className="text-white text-2xl font-bold mb-3">S Y N</h1>
              <p className="text-sm">
                Your voice, your way, your privacy. Explore ideas anonymously with freedom and security.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-white text-lg font-semibold">Quick Links</h2>
              <Link href="#" className="hover:text-white transition duration-300">
                About
              </Link>
              < Link href="#" className="hover:text-white transition duration-300">
                Features
              </Link>
              <Link href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition duration-300">
                Contact
              </Link>
            </div>
  
            <div>
              <h2 className="text-white text-lg font-semibold">Stay Connected</h2>
              <div className="flex space-x-4 mt-2">
                <Link
                  href="#"
                  className="hover:text-white text-xl transition duration-300"
                  aria-label="Facebook"
                >
                    <Facebook/>
                </Link>
                <Link
                  href="#"
                  className="hover:text-white text-xl transition duration-300"
                  aria-label="Twitter"
                >
                  <Twitter/>
                </Link>
                <Link
                  href="#"
                  className="hover:text-white text-xl transition duration-300"
                  aria-label="Instagram"
                >
                  <Instagram/>
                </Link>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-6">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} S Y N. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;