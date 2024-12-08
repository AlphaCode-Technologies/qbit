// Define the Radio component, destructuring `properties` and `actions` from the props.
const Radio = ({ properties, actions }: AlphaElements.RadioProps) => {
  // Extract the custom Renderer component from the properties and spread the rest of the properties.
  const { Renderer, ...rest } = properties;
  // Render the custom Renderer component, passing down the remaining properties and actions.
  return <Renderer properties={rest} actions={actions} />;
};

export default Radio;
