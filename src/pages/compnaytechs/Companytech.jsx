import arrow from "../../assets/arrow.svg";
import spotify from "../../assets/Spotify.svg";
import fliqpay from "../../assets/fliqpay.svg";
import SmartIdea from "../../components/SmartIdea";
import logo from "../../assets/Logo .svg";
import IsoscelesTriangle from "../../components/Trainglebg";
import Marquee from "react-fast-marquee";
import { companydata, companydata2 } from "../../assets/companylogo";

const Companytech = () => {
  return (
    <div className="bg-[#090B0F] text-[#E9E9E9]">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between items-center md:px-15 md:pt-15 md:pb-30 space-y-8 lg:space-y-0 lg:space-x-22">
  {/* Heading */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium w-full lg:w-1/2 leading-tight text-center lg:text-left">
    Our Stack Powers of the{" "}
    <span className="text-[#A5A5A5]">World’s</span> Most{" "}
    <span className="text-[#A5A5A5]">Beloved Companies</span>
  </h1>

  {/* Capsules */}
  <div className="md:relative  w-1/2 ">
                <div
      className="md:relative left-20 -top-2  rounded-[78px] w-[217px] h-22.5 flex justify-start items-center px-4 space-x-4 text-white"
      style={{
        background:
          "linear-gradient(180deg, #2CCEBA 0%, rgba(44, 206, 186, 0.05) 100%)",
      }}
    >
      <div className="w-15 h-15 p-4 bg-white rounded-full ">
        <img src={spotify} alt="" className="h-6.5 w-6.5" />
      </div>

      <h1>Spotify</h1>
    </div>
                <div
      className="md:absolute -top-2 left-80 rounded-[78px] w-[217px] h-22.5 flex justify-start items-center px-4 space-x-4 text-white"
      style={{
        background:
          "linear-gradient(180deg, #2CCEBA 0%, rgba(44, 206, 186, 0.05) 100%)",
      }}
    >
      <div className="w-15 h-15 p-4 bg-white rounded-full ">
        <img src={fliqpay} alt="" className="h-6.5 w-6.5" />
      </div>

      <h1>Spotify</h1>
    </div>
                <div
      className="md:relative left-0 top-1/2 rounded-[78px] w-[217px] h-22.5 flex justify-start items-center px-4 space-x-4 text-white"
      style={{
        background:
          "linear-gradient(180deg, #2CCEBA 0%, rgba(44, 206, 186, 0.05) 100%)",
      }}
    >
      <div className="w-15 h-15 p-4 bg-white rounded-full ">
        <img src='' alt="" className="h-6.5 w-6.5" />
      </div>

      <h1>Dropbox</h1>
    </div>
                <div
      className="md:absolute top-1/3 left-59 rounded-[78px] w-[217px] h-22.5 flex justify-start items-center px-4 space-x-4 text-white"
      style={{
        background:
          "linear-gradient(180deg, #2CCEBA 0%, rgba(44, 206, 186, 0.05) 100%)",
      }}
    >
      <div className="w-15 h-15 p-4 bg-white rounded-full ">
        <img src='' alt="" className="h-6.5 w-6.5" />
      </div>

      <h1>Spotify</h1>
    </div>
                <div
      className="md:relative top-2 left-20 rounded-[78px] w-[217px] h-22.5 flex justify-start items-center px-4 space-x-4 text-white"
      style={{
        background:
          "linear-gradient(180deg, #2CCEBA 0%, rgba(44, 206, 186, 0.05) 100%)",
      }}
    >
      <div className="w-15 h-15 p-4 bg-white rounded-full ">
        <img src='' alt="" className="h-6.5 w-6.5" />
      </div>

      <h1>Spotify</h1>
    </div>
            </div>
            </div>



      {/* Middle section */}
      <div className="relative overflow-hidden md:mx-6 pt-12 pb-15 px-4 sm:px-8 md:px-15 flex flex-col items-center justify-center text-center">
        <div className="absolute left-[135px] top-[-45px] w-[1121.778px] h-[337.778px] rounded-[1121.778px] opacity-20 bg-[#22C1AD] blur-[150.888885px]" />
        <IsoscelesTriangle
          width={60}
          height={400}
          angle={45}
          className="absolute -bottom-10 left-10 sm:left-30"
        />
        <IsoscelesTriangle
          width={60}
          height={500}
          angle={45}
          className="absolute -bottom-10 right-10 sm:right-30 scale-x-[-1]"
        />
        <SmartIdea />
        <img
          src={logo}
          alt=""
          className="bg-white p-3 mt-8 rounded-2xl w-20 sm:w-auto"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] mt-8.5 font-medium leading-tight">
          Uncover the Design and Development Projects{" "}
          <span className="text-[#A5A5A5]">That Set Us Apart</span>
        </h1>
        <div className="flex justify-center mt-10 sm:mt-20">
          <div className="flex justify-between w-[150px] sm:w-[205px] items-center space-x-1 rounded-[45.333px] px-3 py-2 sm:py-2.5 border border-white/50 bg-[linear-gradient(241deg,_rgba(255,255,255,0.5)_-7.37%,_rgba(255,255,255,0.1)_89.52%)] backdrop-blur-[6.67px]">
            <h2 className="text-xs sm:text-base">Contact Us</h2>
            <img
              src={arrow}
              alt=""
              className="bg-white p-1 rounded-full h-6 w-6 sm:h-7 sm:w-7"
            />
          </div>
        </div>
      </div>

      {/* Marquees */}
      <div className="space-y-8 sm:space-y-12 mt-16 pb-10 md:pb-28 sm:mt-26">
        <SmartIdea />
        <Marquee speed={50} gradient={false}>
          {companydata.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-4 mr-6 sm:mr-12"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-[48px] sm:w-[129px] sm:h-[54px] rounded-[43px] object-cover"
              />
              <span className="text-sm sm:text-lg font-medium text-white">
                {company.name}
              </span>
            </div>
          ))}
        </Marquee>

        <Marquee speed={80} gradient={false}>
          {companydata2.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-4 mr-6 sm:mr-12"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-[48px] sm:w-[129px] sm:h-[54px] rounded-[43px] object-cover"
              />
              <span className="text-sm sm:text-lg font-medium text-white">
                {company.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Companytech;
