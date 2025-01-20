const Drawer: com.qbit.Skin<DrawerProps> = (props) => {
  const { children, onClose } = props;

  return (
    <div className="h-full pointer-events-auto bg-white box-border shadow-2xl shadow-blue-gray-900/10 p-4">
      <button className="text-gray-500 hover:text-gray-800" onClick={() => onClose?.()}>
        X
      </button>
      {children}
    </div>
  );
};

export default Drawer;
