const DrawerHeader: com.elem.Skin<AlphaElements.DrawerProperties, AlphaElements.DrawerActions> = ({ actions }) => {
  const { onClose } = actions ?? {};

  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Drawer Title</h2>
      <button className="text-gray-500 hover:text-gray-800" onClick={() => onClose?.()}>
        X
      </button>
    </div>
  );
};

export default DrawerHeader;
