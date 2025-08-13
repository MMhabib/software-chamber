const FeatureItem = ({ number, title, description }) => {
    return (
        <div className="flex    items-center  md:p-4 rounded-xl gap-2 md:gap-4">
            {/* Circle with number */}
            <div className="relative w-8 sm:w-15 h-8 sm:h-15 flex items-center justify-center flex-shrink-0">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full bg-[#27B4A3]"></div>
                
                {/* Inner white circle */}
                <div className="relative w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-white flex items-center justify-center">
                    <span className="font-bold text-[#436255] text-xs sm:text-xs">{number}</span>
                </div>
            </div>

            {/* Text */}
            <div className="text-left">
                <h3 className="text-[20px] sm:text-[26px] text-[#36394A] font-semibold">{title}</h3>
                {description && (
                    <p className="text-gray-500 text-sm sm:text-base break-words">{description}</p>
                )}
            </div>
        </div>
    );
};

export default FeatureItem;
