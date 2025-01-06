const ListSkin: com.qbit.Skin<ListProps> = (props: com.qbit.SkinProps<ListProps>) => {
  const { children } = props;

  return <ul>{children}</ul>;
};

export default ListSkin;
