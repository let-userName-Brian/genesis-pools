const CircleIcon: React.FC<{
  height?: number;
  width?: number;
  stroke?: string;
}> = ({ height = "3rem", width = "3rem", stroke = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24.0374" cy="23.5" r="23.5" fill={stroke} />
    </svg>
  );
};

export default CircleIcon;
