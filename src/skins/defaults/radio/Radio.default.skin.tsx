const RadioSkin: com.qbit.Skin<RadioGroupProps> = (props: com.qbit.SkinProps<RadioGroupProps>) => {
  const { children, horizontal } = props;

  return <fieldset className={`${horizontal ? 'flex gap-2' : ''}`}>{children}</fieldset>;
};

export default RadioSkin;
