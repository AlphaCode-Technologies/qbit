const TabSkin: com.elem.Skin<AlphaElements.TabProperties, AlphaElements.TabAction> = ({ properties, actions = {} }) => {
  const { name, active, disabled } = properties;
  const { onClick } = actions;

  return (
    <button
      className={`px-4 py-2 ${active ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-blue-500'} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      onClick={(e) => {
        if (!disabled) {
          onClick?.(e);
        }
      }}
    >
      {name}
    </button>
  );
};

export default TabSkin;
