export default function GridBackground({
  color = "rgba(255,255,255,0.3)", // dash color
  holeSize = "40%",                // hole in the middle
  bgColor = "#0f172a",              // background color
  dashLength = 4,                   // length of each dash in px
  gapLength = 10,                   // gap between dashes in px
  boxHeight = 40,                   // vertical spacing
  children
}) {
  return (
    <div className="relative h-full w-full" style={{ backgroundColor: bgColor }}>
      <div
        className="absolute inset-0 [mask-repeat:no-repeat] [mask-position:center]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${color} ${dashLength}px, transparent ${dashLength}px),
            linear-gradient(to bottom, ${color} ${dashLength}px, transparent ${dashLength}px)
          `,
          backgroundSize: `${dashLength + gapLength}px ${boxHeight}px`,
          WebkitMaskImage: `radial-gradient(ellipse 60% 50% at 50% 50%, transparent ${holeSize}, black 100%)`,
          maskImage: `radial-gradient(ellipse 60% 50% at 50% 50%, transparent ${holeSize}, black 100%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
