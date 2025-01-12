const StarIcon: React.FC<{
  height?: number;
  width?: number;
  stroke?: string;
}> = ({ height = 36, width = 36, stroke = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_25)">
        <path
          d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
          fill={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0_9_25">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarIcon;
