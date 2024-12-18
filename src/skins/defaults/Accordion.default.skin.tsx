const DefaultAccordionSkin = ({ properties }: AlphaElements.AccordionProps) => {
  const { content } = properties;

  return <div className="p-4 bg-gray-50 text-gray-700 border-t border-gray-300">{content}</div>;
};

export default DefaultAccordionSkin;
