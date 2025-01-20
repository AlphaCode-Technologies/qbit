const MenuItemSkin: com.qbit.Skin<MenuItemProps> = (props) => {
  const { children, label } = props;

  return (
    <div className="w-fit relative my-2 menu-item">
      <svg
        width="100%"
        height="48"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-100 hover:text-gray-300 cursor-pointer"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="47"
          rx="7.5"
          ry="7.5"
          fill="currentColor"
          stroke="#000"
          strokeWidth="1"
        />

        <text x="10" y="30" rx="9" fill="currentColor" className="text-gray-700">
          {label}
        </text>
      </svg>

      {children && <div className="absolute top-0 left-full hidden w-full sub-menu">{children}</div>}
    </div>
  );
};

export default MenuItemSkin;
