const Skin = ({ properties, actions }: AlphaElements.RadioProps) => {
  const { label, value, selected, tabIndex } = properties;
  const { onChange } = actions ?? {};
  return (
    <button
      className={`bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 ${selected && 'border border-teal-900'}`}
      onClick={() => onChange?.(value)}
      tabIndex={tabIndex}
    >
      {label}
    </button>
  );
};

export default Skin;
