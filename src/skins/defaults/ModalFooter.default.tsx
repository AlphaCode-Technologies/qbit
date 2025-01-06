const ModalFooter: com.elem.Skin<AlphaElements.ModalProperties, AlphaElements.ModalActions> = () => {
  return (
    <div className="flex justify-end space-x-4 mt-4">
      <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Cancel</button>
      <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded">Save</button>
    </div>
  );
};

export default ModalFooter;
