import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Section */}
          <div className="lg:col-span-5 space-y-12">
            {/* Let's Talk Section */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                LET&apos;S TALK
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                A new era of energy, elegance, and elite competition begins
                here. Where passion meets performance on the court like never
                before.
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Social media</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="social-link text-gray-300 hover:text-blue-400 flex items-center space-x-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Instagram</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link text-gray-300 hover:text-blue-400 flex items-center space-x-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Twitter</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link text-gray-300 hover:text-blue-400 flex items-center space-x-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Tiktok</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link text-gray-300 hover:text-blue-400 flex items-center space-x-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Facebook</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link text-gray-300 hover:text-blue-400 flex items-center space-x-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>LinkedIn</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link text-gray-300 hover:text-blue-400 flex items-center space-x-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Youtube</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="lg:col-span-3 space-y-8">
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-400 uppercase tracking-wider">
                ADDRESS
              </h3>
              <div className="text-gray-300">
                <p>1901 thornridge Cir,</p>
                <p>Shiloh, Hawaii 81063</p>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-400 uppercase tracking-wider">
                PHONE
              </h3>
              <a
                href="tel:+18722983989"
                className="text-gray-300 hover:text-white transition-colors"
              >
                (+1) 872-298-3989
              </a>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-400 uppercase tracking-wider">
                EMAIL
              </h3>
              <a
                href="mailto:hello@franzit.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                hello@franzit.com
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c750b92-c6c7-46b3-b450-cdb18350e9bf.png"
                alt="Professional business meeting"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              2024 Software Chamber All Right Reserved
            </p>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
