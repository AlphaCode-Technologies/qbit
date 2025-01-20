const TooltipSkin: com.qbit.Skin<TooltipProps> = (props: com.qbit.SkinProps<TooltipProps>) => {
  const { children, ...rest } = props;
  const { onChange, onBlur, onFocus, testId, ...otherProps } = rest;

  return <div {...otherProps}>{children}</div>;
};

export default TooltipSkin;
