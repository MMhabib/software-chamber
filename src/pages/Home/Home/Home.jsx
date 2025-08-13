import arrow from "../../../assets/arrow.svg";
import Navbar from "../Navbar";
import SmartIdea from "../../../components/SmartIdea";
import IsoscelesTriangle from "../../../components/Trainglebg";
import { CardStackDemo } from "./Cardstack";

const Home = () => {
  return (
    <div className="bg-[#0E0E17] relative min-h-[600px] px-4 sm:px-8 lg:px-15 py-8">
      <Navbar />

      <IsoscelesTriangle
        width={50}
        height={720}
        angle={115}
        className="-top-60 left-14"
      />
      <IsoscelesTriangle
        width={40}
        height={720}
        angle={115}
        className="-top-5 left-14"
      />
<IsoscelesTriangle
  width={50}
  height={720}
  angle={115}
  className="-top-60 right-14 scale-x-[-1]"
/>
<IsoscelesTriangle
  width={40}
  height={720}
  angle={115}
  className="-top-5 right-14 scale-x-[-1]"
/>


      <SmartIdea />

      <div>
        <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] text-center my-4 leading-[48px] sm:leading-[68px] lg:leading-[88px] tracking-[-0.8px] text-white">
          <span className="block text-[#00FFE0]">We are your Software</span>
          Development Team in The Cloud
        </h1>
      </div>

      <div className="flex justify-center mt-4">
        <div className="flex justify-between w-[180px] sm:w-[205px] items-center space-x-1 rounded-[45.333px] px-3 py-2.5 border border-white/50 bg-[linear-gradient(241deg,_rgba(255,255,255,0.5)_-7.37%,_rgba(255,255,255,0.1)_89.52%)] backdrop-blur-[6.67px]">
          <h2 className="text-sm sm:text-base">Contact Us</h2>
          <img
            src={arrow}
            alt=""
            className="bg-white p-1 rounded-full h-6 w-6 sm:h-7 sm:w-7"
          />
        </div>
      </div>
      <CardStackDemo/>
    </div>
  );
};

export default Home;
