const Skin = ({ properties, actions }: AlphaElements.AvatarProps) => {
  const { value, testId } = properties;
  const { onClick } = actions ?? {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      onClick={() => onClick?.()}
      data-testid={testId}
    >
      <path
        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
        fill="#F2F4F7"
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#1f2937">
        {value}
      </text>
    </svg>
  );
};

export default Skin;
