// Define the Loader component, destructuring `properties` from the props.
const Loader = ({ properties }: AlphaElements.LoaderProps) => {
  // Extract the custom Renderer component from the properties and spread the rest of the properties.
  const { isLoading, Renderer } = properties;

  if (isLoading) {
    // Render the custom Renderer component, passing down the remaining properties.
    return <Renderer properties={properties} />;
  }
};

export default Loader;
