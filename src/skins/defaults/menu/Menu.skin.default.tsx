const MenuSkin: com.qbit.Skin<MenuProps> = (props: com.qbit.SkinProps<MenuProps>) => {
  const { children } = props;

  return <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded bg-slate-100 p-2 w-60">{children}</div>;
};

export default MenuSkin;
