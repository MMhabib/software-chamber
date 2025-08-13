import React from 'react';
import Accordion from './Accordian';
import star from '../../assets/stars.svg'
import arrow from '../../assets/growth.svg'

const Faq = () => {
    return (
        <div className='p-4 md:px-15 md:pt-30 space-x-10'>
            {/* title */}
           <h1 className="text-lg md:text-[70px] text-center font-medium leading-tight mx-auto md:mx-17.5">
               
              Comprehensive Answers to the Most    <br /><img src={star} alt="" className="inline-block md:h-14.5 md:w-14.5  h-6 w-6 align-middle mr-3" />Common Questions <span className='text-[#A5A5A5]'>About Our Service</span>s and How We <span className='text-[#A5A5A5]'>work</span>
               <img src={arrow} alt="" className="inline-block md:h-14.5 md:w-14.5  h-6 w-6 align-middle ml-3" />
             </h1>
            <Accordion/>
        </div>
    );
};

export default Faq;


//  At Software Chamber,  in turning complex challenges into elegant 