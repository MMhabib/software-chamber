import SmartIdea from "../../components/SmartIdea";
import alexis from '../../assets/alexis.jpg';
import mono from '../../assets/mono.svg';

const Testimonial = () => {
    return (
        <div className="px-4 md:px-15 py-10 md:py-30 text-white bg-[#090B0F]">
            <SmartIdea />
            
            <h1 className="text-3xl sm:text-4xl lg:text-[70px] font-medium text-center mt-6 md:mt-10 mb-8 md:mb-30 leading-tight">
                Don’t just take our word for it. Hear <br className="hidden md:block" />
                what <span className="text-[#A5A5A5]">our clients say</span>
            </h1>
            
            <div 
                className="px-4 md:px-14.5 py-5 md:py-7 rounded-3xl border-2 border-[#2CCEBA]"
                style={{
                    boxShadow: "0 16px 36px 0 rgba(44, 206, 186, 0.15)"
                }}
            >
                <div className="space-y-6 md:space-y-14.5 mx-2 md:mx-8 my-4">
                    <h1 className="text-lg sm:text-xl md:text-[30px] font-medium text-start break-words">
                        "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo."
                    </h1>
                    
                    <div className="flex  justify-between items-center gap-4 sm:gap-0">
                        <div className="flex items-center space-x-4">
                            <img 
                                src={alexis} 
                                alt="" 
                                className="h-12 w-12 sm:h-[61px] sm:w-[61px] rounded-full"
                            />
                            <div>
                                <h2 className="text-base sm:text-lg font-medium">Alex Larkins</h2>
                                <p className="text-sm sm:text-base">Art director at Airbnb</p>
                            </div>
                        </div>
                        
                        <div className="flex justify-center sm:justify-end">
                            <img src={mono} alt="" className="h-2 sm:h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
