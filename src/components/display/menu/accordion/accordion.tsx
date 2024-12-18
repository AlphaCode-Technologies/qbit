const Accordion = ({ properties, actions }: AlphaElements.AccordionProps) => {
  const { id, title, isOpen } = properties;
  const { onToggle } = actions;

  return (
    <div id={id} className="w-full bg-white border border-gray-300 rounded-md shadow-sm">
      <div
        className="p-4 text-lg font-medium text-gray-800 cursor-pointer hover:bg-gray-100"
        onClick={() => onToggle(!isOpen)}
      >
        {title}
      </div>
      {isOpen && <properties.Renderer properties={properties} actions={actions} />}
    </div>
  );
};

export default Accordion;
