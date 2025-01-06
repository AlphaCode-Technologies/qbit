const ListItemSkin: com.qbit.Skin<ListItemProps> = (props) => {
  const { label, ...rest } = props;

  return <li {...rest}>{label}</li>;
};

export default ListItemSkin;
