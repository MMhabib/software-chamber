import { MdOutlineArrowOutward } from 'react-icons/md';
import star from '../../assets/stars.svg';

const ServiceCards = () => {
    return (
        <div className="px-4 md:px-0">
            {/* Header */}
            <div className="flex   justify-between items-center gap-4">
                <h1 className="text-[#0C0C0C] text-12 sm:text-[60px] md:text-[110px] font-medium leading-tight">
                    Services
                    <img src={star} alt="" className="inline-block w-6 md:w-auto" />
                </h1>
                <p className="text-base sm:text-lg md:text-xl">All services</p>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[429px] max-h-[414px] bg-[#F3F3F3] rounded-3xl px-4 sm:px-6 py-8 sm:py-11 
                                   hover:bg-[#27B4A3] hover:text-white transition-colors duration-300"
                    >
                        <h1 className="text-[26px] sm:text-[32px] md:text-[42px] font-semibold leading-tight">
                            Web & Mobile App Development
                        </h1>
                        <p className="text-base sm:text-lg mt-6 sm:mt-9 mb-8 sm:mb-15">
                            Software Chamber specializes in creating powerful, scalable, and secure e-
                        </p>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white 
                                        [box-shadow:0_11px_16px_0_rgba(0,0,0,0.09)]">
                            <MdOutlineArrowOutward className="text-black text-2xl sm:text-4xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
