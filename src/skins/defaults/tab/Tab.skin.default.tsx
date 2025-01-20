const TabSkin: com.qbit.Skin<TabProps> = (props: com.qbit.SkinProps<TabProps>) => {
  const { children } = props;

  return <div className="p-2">{children}</div>;
};

export default TabSkin;
