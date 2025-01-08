const ListSkin: com.qbit.Skin<ListProps> = (props: com.qbit.SkinProps<ListProps>) => {
  const { children, ...rest } = props;
  const { onChange, onBlur, onFocus, ...otherProps } = rest;

  return <ul {...otherProps}>{children}</ul>;
};

export default ListSkin;
