import React, { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState("+1");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    message: "",
  });
  const [buttonState, setButtonState] = useState("default");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectCountry = (code) => {
    setSelectedCountry(code);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonState("loading");

    const submittedData = {
      ...formData,
      phone: `${selectedCountry} ${formData.phone}`,
    };

    console.log("Form submitted:", submittedData);

    setTimeout(() => {
      setButtonState("submitted");
      setTimeout(() => {
        setButtonState("default");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          jobTitle: "",
          message: "",
        });
      }, 2000);
    }, 1500);
  };

  return (

      <div className="w-full ">
        <form className="space-y-4" onSubmit={handleSubmit}>
          

          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white"
            required
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white"
            required
          />

          {/* Phone with Dropdown */}
          <div className="flex space-x-2">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={toggleDropdown}
                className="px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white flex items-center justify-between min-w-[80px]"
              >
                <span>{selectedCountry}</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div
                className={`absolute left-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                {["+1 (US)", "+44 (UK)", "+33 (FR)", "+49 (DE)", "+91 (IN)" ,"+88 (BD)"].map(
                  (country) => (
                    <div
                      key={country}
                      onClick={() => selectCountry(country.split(" ")[0])}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    >
                      {country}
                    </div>
                  )
                )}
              </div>
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white"
              required
            />
          </div>

          {/* Job Title */}
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-white resize-none"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              disabled={buttonState === "loading"}
            >
              {buttonState === "default" && (
                <>
                  <span>Submit</span>
                  <div className="bg-white bg-opacity-20 rounded-full p-2">
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </>
              )}
              {buttonState === "loading" && (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Submitting...</span>
                </>
              )}
              {buttonState === "submitted" && (
                <>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Submitted!</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    
  );
}
