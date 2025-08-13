import star from '../../assets/stars.svg';
import arrow from '../../assets/growth.svg';
import teamimage from '../../assets/teamimage.jpg';
import FeatureItem from './Featuresection';

const Table = () => {
    return (
        <div className="px-4 md:px-10">
            {/* Title */}
            <div>
                <h1 className="text-3xl sm:text-4xl md:text-[70px] text-center font-medium leading-snug md:leading-tight p-4 md:p-6">
                    <img src={star} alt="" className="inline-block h-6 sm:h-10 md:h-15 w-6 sm:w-10 md:w-15 align-middle mr-2 sm:mr-3" />
                    At Software Chamber, <span className='text-[#A5A5A5]'>we specialize</span> in turning complex challenges into elegant <span className='text-[#A5A5A5]'>digital solutions</span>
                    <img src={arrow} alt="" className="inline-block h-6 sm:h-10 md:h-14.5 w-6 sm:w-10 md:w-14.5 align-middle ml-2 sm:ml-3" />
                </h1>
            </div>

            {/* Table Content */}
            <div className='mt-10 md:mt-14 flex flex-col md:flex-row justify-center items-center gap-10'>
                
                {/* Left Stats */}
                <div className="space-y-6 md:space-y-10 text-center md:text-left">
                    <div>
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">20+</div>
                        <div className="text-lg sm:text-xl md:text-[26px] text-[#808080]">Tech Partners</div>
                    </div>
                    <div>
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">150+</div>
                        <div className="text-lg sm:text-xl md:text-[26px] text-[#808080]">Project Completed</div>
                    </div>
                    <div>
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">1K+</div>
                        <div className="text-lg sm:text-xl md:text-[26px] text-[#808080]">Satisfied Customers</div>
                    </div>
                </div>

                {/* Center Image */}
                <div className="flex justify-center w-full h-full md:w-auto">
                    <div className="relative w-full max-w-md">
                        <img 
                            src={teamimage}
                            alt="Professional team meeting"
                            className="rounded-2xl shadow-2xl object-cover w-full h-[474px]"
                        />
                    </div>
                </div>

                {/* Right Features */}
                <div className="space-y-4 md:space-y-6 p-2 md:p-0 w-full md:w-auto">
                    <FeatureItem
                        number="1"
                        title="Your Team in the cloud"
                        description="We Hire Best and brightest Talents to build world class technology"
                    />
                    <FeatureItem
                        number="2"
                        title="Grow more with less"
                        description="We have a competitive pricing structure"
                    />
                    <FeatureItem
                        number="3"
                        title="Weekly sprint and reviews"
                        description="Our fast review and feedback loop is designed to keep you in the driver's seat"
                    />
                    <FeatureItem
                        number="4"
                        title="Communication First"
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;
