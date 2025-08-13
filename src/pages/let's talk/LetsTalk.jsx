import ContactForm from "./Form";
import formphoto from "../../assets/fromphoto.png";

const LetsTalk = () => {
  return (
    <div className="md:px-15 p-4 md:py-30">
      {/* Title */}
      <div className="flex flex-col text-center space-y-7.5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] mx-auto leading-tight max-w-5xl">
          Let’s talk about your next project. <span className="text-[#A5A5A5]">We’re here to help.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mx-auto max-w-3xl">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <img
          src={formphoto}
          alt=""
          className="w-full rounded-2xl border-2 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[582px] object-cover"
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default LetsTalk;
