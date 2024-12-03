const Radio = ({ properties, actions }: AlphaElements.RadioProps) => {
  const { Renderer, ...rest } = properties;

  return <Renderer properties={rest} actions={actions} />;
};

export default Radio;
