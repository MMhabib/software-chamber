import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const faqData = [
  {
    question: "What software development services does your company offer?",
    answer:
      'To create an account, simply click the "Sign Up" button at the top-right corner of the page and fill in your details. It only takes a minute!',
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.",
  },
  {
    question: "What sets your company apart from the competition?",
    answer:
      "Don't worry! You can easily reset your password by clicking the 'Forgot Password' link on the login page. We'll send a reset link to your email.",
  },
  {
    question: "Is my project idea and information kept confidential?",
    answer:
      'All our user guides and documentation are available in the "Help" section of our website. You can also search for specific topics.',
  },
  
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
  className="flex items-center justify-between w-full py-8 text-left focus:outline-none rounded-2xl hover:bg-gray-50 transition-colors"
  onClick={onToggle}
>
  <span className="md:text-[28px] text-lg font-medium text-[#0C0C0C] break-words pr-4">
    {item.question}
  </span>
  <ChevronDown
    size={26}
    className={`flex-shrink-0 transform transition-transform duration-300 text-white p-2 md:size-8 rounded-full ${
      isOpen ? "rotate-180 bg-[#2CCEBA]" : "bg-black"
    }`}
  />
</button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-gray-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(2);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full mx-auto">
        <div >
          <div className="flex justify-between items-center text-[#0C0C0C] max-sm:mt-4 md:mb-15 border-b pb-5 border-dashed">
            <h1 className="text-3xl md:text-[110px] font-medium ">FAQ</h1>
            <div className="flex  space-x-3 items-center">
              <h2 className="text-[22px] ">ALL FAQ</h2>
             <div className="bg-[#2CCEBA] p-2 rounded-full">
               <FaArrowRight />
             </div>
            </div>
          </div>
          <div className="rounded-lg">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
