// components/TriangleBackground.js

const TriangleBackground = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="483"
      height="417"
      viewBox="0 0 483 417"
      fill="none"
    >
      <g filter="url(#filter0_f_1_848)">
        <path
          d="M-146.058 -18L350 284L-165 26.9159L-146.058 -18Z"
          fill="url(#paint0_linear_1_848)"
        />
        {/* Optional: Remove this line if you don't want the black outline */}
        {/* <path d="M-146.058 -18L350 284L-165 26.9159L-146.058 -18Z" stroke="black" /> */}
      </g>
      <defs>
        <filter
          id="filter0_f_1_848"
          x="-297.643"
          y="-150.729"
          width="779.903"
          height="567.176"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="66"
            result="effect1_foregroundBlur_1_848"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_848"
          x1="59.9441"
          y1="103.5"
          x2="92.5"
          y2="-18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22C1AD" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TriangleBackground;
