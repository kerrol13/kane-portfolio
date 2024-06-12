const SvgWrapper = ({ children, title }) => {
  return (
    <svg
      viewBox="0 0 128 128"
      width="clamp(2rem,4vw,1.3vw)"
      height="clamp(2rem,4vw,1.3vw)"
    >
      {children}
      <title>{title}</title>
    </svg>
  );
};
export default SvgWrapper;
