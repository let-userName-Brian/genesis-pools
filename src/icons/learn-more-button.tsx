const LearnMoreIcon: React.FC<{
  height?: number;
  width?: number;
  stroke?: string; //#B9FF66
  fill?: string; //#191A23
}> = ({ height = "2.563rem", width = "2.563rem", stroke = "#92D2FE", fill = "#191A23" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20.5" cy="20.5" r="20.5" fill={fill} />
      <path
        d="M11.25 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.75 27.299L30.0706 17.299L28.5706 14.701L11.25 24.701L12.75 27.299Z"
        fill={stroke}
      />
    </svg>
  );
};

export default LearnMoreIcon;
