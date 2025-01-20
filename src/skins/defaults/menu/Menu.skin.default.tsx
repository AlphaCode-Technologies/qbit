const MenuSkin: com.qbit.Skin<MenuProps> = (props: com.qbit.SkinProps<MenuProps>) => {
  const { children } = props;

  return <div className="rounded bg-slate-100 p-2 w-fit">{children}</div>;
};

export default MenuSkin;
