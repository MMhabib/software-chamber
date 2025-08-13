import React from 'react';
import chorki from '../../assets/chorki.svg';
import flower2 from '../../assets/flower2.svg';
import bomb from '../../assets/bomb.svg';
import flower from '../../assets/flower.svg';

const Whychoose = () => {
  return (
    <div className="p-4 md:px-15 md:pb-16   ">
      {/* title */}
      <div className="flex flex-col text-center justify-center">
        <h1 className="text-[#0C0C0C] text-[30px] md:text-[70px] font-medium leading-20 mb-6">
          Why Choose <br />Softwarechamber
        </h1>
        <p className="text-lg">
          Deliver personalized experiences to your customers with AI-powered <br className="hidden md:block" />
          recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-col w-full md:flex-row space-x-0 md:space-x-3 max-md:space-y-4 md:relative justify-center items-center  mt-10">
        <div className="max-w-[318px]  bg-[#F3F3F3] rounded-3xl px-5.5 py-7">
          <div className="flex justify-between items-center pb-6 border-b border-b-[#A5A5A5]">
            <h1 className="text-[30px] md:text-[42px] font-semibold leading-tight">
              Efficiency
            </h1>
            <img src={chorki} alt="Efficiency icon" className="bg-[#2CCEBA] rounded-full p-3" />
          </div>
          <p className="text-lg mt-9 mb-15">
            Software Chamber specializes in creating powerful, scalable, and secure e-
          </p>
        </div>

        <div className="max-w-[318px] relative md:top-10 bg-[#F3F3F3] rounded-3xl px-5.5 py-7">
          <div className="flex justify-between items-center pb-6 border-b border-b-[#A5A5A5]">
            <h1 className="text-[30px] md:text-[42px] font-semibold leading-tight">
              Adaptability
            </h1>
            <img src={flower} alt="Adaptability icon" className="bg-[#2CCEBA] rounded-full p-3" />
          </div>
          <p className="text-lg mt-9 mb-15">
            Software Chamber specializes in creating powerful, scalable, and secure e-
          </p>
        </div>

        <div className="max-w-[318px] bg-[#F3F3F3] rounded-3xl px-5.5 py-7">
          <div className="flex justify-between items-center pb-6 border-b border-b-[#A5A5A5]">
            <h1 className="text-[30px] md:text-[42px] font-semibold leading-tight">
              Scalability
            </h1>
            <img src={bomb} alt="Scalability icon" className="bg-[#2CCEBA] rounded-full p-3" />
          </div>
          <p className="text-lg mt-9 mb-15">
            Software Chamber specializes in creating powerful, scalable, and secure e-
          </p>
        </div>

        <div className="max-w-[318px] relative md:top-10 bg-[#F3F3F3] rounded-3xl px-5.5 py-7">
          <div className="flex justify-between items-center pb-6 border-b border-b-[#A5A5A5]">
            <h1 className="text-[30px] md:text-[42px] font-semibold leading-tight">
              Precision
            </h1>
            <img src={flower2} alt="Precision icon" className="bg-[#2CCEBA] rounded-full p-3" />
          </div>
          <p className="text-lg mt-9 mb-15">
            Software Chamber specializes in creating powerful, scalable, and secure e-
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
