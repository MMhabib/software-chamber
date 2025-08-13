export default function IsoscelesTriangle({
  width = 120,
  height = 160,
  angle = 0,
  className = "",       // accept external Tailwind classes here
}) {
  return (
    <svg
      className={`absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ transform: `rotate(${angle}deg)`, filter: "blur(66px)", }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="triangleGradient" gradientTransform="rotate(205)">
          <stop offset="54.72%" stopColor="#22C1AD" />
          <stop offset="84.32%" stopColor="#000000" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${width / 2},0 ${width},${height}`}
        fill="url(#triangleGradient)"
        stroke="#000"
        strokeWidth="1"
      />
    </svg>
  );
}
