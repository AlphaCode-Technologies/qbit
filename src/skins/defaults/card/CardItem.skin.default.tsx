const CardItem: com.qbit.Skin<DrawerItemProps> = (props) => {
  const { children } = props;

  return <div className="text-gray-600">{children}</div>;
};

export default CardItem;
