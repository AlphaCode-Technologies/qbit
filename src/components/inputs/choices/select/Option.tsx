const Option = ({ properties, actions }: AlphaElements.OptionProps) => {
  const { Renderer, ...rest } = properties;
  return <Renderer properties={rest} actions={actions} />;
};

export default Option;
