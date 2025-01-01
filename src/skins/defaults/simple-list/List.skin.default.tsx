const ListSkin: com.elem.Skin<ListProps> = <V extends com.utils.ValidTypes>(
  props: com.elem.SkinProps<ListProps<V>>,
) => {
  const { children } = props;

  return <ul>{children}</ul>;
};

export default ListSkin;
