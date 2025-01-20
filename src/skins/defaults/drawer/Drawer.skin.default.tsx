const Drawer: com.qbit.Skin<DrawerProps> = (props) => {
  const { children } = props;

  return (
    <div className="h-full pointer-events-auto bg-white box-border shadow-2xl shadow-blue-gray-900/10 p-4">
      {children}
    </div>
  );
};

export default Drawer;
