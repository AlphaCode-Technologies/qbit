const ListSkin: com.elem.Skin<ListProps> = (props: com.elem.SkinProps<ListProps>) => {
  const { children } = props;

  return <ul>{children}</ul>;
};

export default ListSkin;
