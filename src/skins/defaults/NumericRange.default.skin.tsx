const NumericRange: com.qbit.Skin<NumericRangeProps> = (props: com.qbit.SkinProps<NumericRangeProps>) => {
  const { children, ...rest } = props;
  const { onChange, onBlur, onFocus, testId, ...otherProps } = rest;
  return (
    <div {...otherProps} data-testid={testId}>
      <svg width="100%" height="8" viewBox="0 0 320 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H316C318.209 0 320 1.79086 320 4C320 6.20914 318.209 8 316 8H4C1.79086 8 0 6.20914 0 4Z"
          fill="#EAECF0"
        />
      </svg>
      {children}
    </div>
  );
};

export default NumericRange;
