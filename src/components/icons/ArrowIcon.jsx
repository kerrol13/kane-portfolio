const ArrowIcon = ({color,rotate}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-[clamp(1.5rem,2vw,1.1vw)] -mt-[2px] ${rotate?"rotate-180":"rotate-0"} `}
      >
      <path
        d="M6 12H18M6 12L11 7M6 12L11 17"
        stroke={color??"white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ArrowIcon;
