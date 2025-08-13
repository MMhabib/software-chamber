import React from "react";
import SmartIdea from "../../components/SmartIdea";
import { GlobeDemo } from "./HalfGlobe";


const stepsData = [
    { label: "Code" },
    { label: "Build" },
    { label: "Test" },
    { label: "Release" },
    { label: "Deploy" },
    { label: "Monitor" },
    { label: "Refactor" },
];

const Development = () => {

 return (

 <div className="relative text-white md:py-12 overflow-hidden bg-[#28303F]">

<div className="text-center">

<SmartIdea />

 <h1 className="text-[70px] font-medium">

 Our Software <br /> Development Process

 </h1>

<p>

 Deliver personalized experiences to your customers with AI-powered

recommendation engines and dynamic content generation.

 </p>

</div>









 


 {/* Globe positioned at bottom half center */}

 <div className="relative left-1/2 -translate-x-1/2 -bottom-30

     w-[350px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[800px] md:h-[400px]">

 <GlobeDemo />

 </div>

</div>



 );

};



export default Development;
