const SplitterSkin: com.qbit.Skin<SplitterProps> = (props: com.qbit.SkinProps<SplitterProps>) => {
  const { children, ...rest } = props;
  const { onChange, onBlur, onFocus, horizontal, ...otherProps } = rest;
  return (
    <div {...otherProps} className={`bg-slate-200 w-full h-full ${horizontal ? 'flex' : ''}`}>
      {children}
    </div>
  );
};

export default SplitterSkin;
