const BadgeSkin: com.qbit.Skin<BadgeProps> = (props: com.qbit.SkinProps<BadgeProps>) => {
  const { children, disabled, size, testId, ...rest } = props;
  const sizeMap = {
    sm: { width: 80, height: 28 },
    md: { width: 100, height: 28 },
    lg: { width: 120, height: 28 },
    xl: { width: 150, height: 30 },
  };
  const dimension = sizeMap[size as keyof typeof sizeMap];

  return (
    <div className={`badge-container ${rest.className}`}>
      <div
        className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
        data-testid={disabled ? 'badge-disabled-container' : undefined}
      >
        <svg
          width={dimension.width}
          height={dimension.height}
          viewBox="0 0 120 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-testid={testId}
        >
          {/* Outer shape */}
          <path
            d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H114C117.038 0.5 119.5 2.96243 119.5 6V22C119.5 25.0376 117.038 27.5 114 27.5H6C2.96244 27.5 0.5 25.0376 0.5 22V6Z"
            fill="white"
            stroke="#D0D5DD"
          />
          {children}
        </svg>
      </div>
    </div>
  );
};

export default BadgeSkin;
