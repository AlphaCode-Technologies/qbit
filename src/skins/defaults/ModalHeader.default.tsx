const ModalHeader: com.elem.Skin<AlphaElements.ModalProperties, AlphaElements.ModalActions> = ({ actions }) => {
  const { onClose } = actions ?? {};
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Modal Title</h2>
      <button className="text-gray-500 hover:text-gray-800" onClick={() => onClose?.()}>
        X
      </button>
    </div>
  );
};

export default ModalHeader;
