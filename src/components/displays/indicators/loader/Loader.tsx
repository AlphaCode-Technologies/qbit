import { Shell } from '@components/containers';

const Loader = ({ properties, options }: com.elem.Shell<AlphaElements.LoaderProperties, 0>) => {
  // TODO -> discuss with @dulan
  const { isLoading } = properties;

  if (isLoading) {
    return (
      <Shell<AlphaElements.ButtonProperties, AlphaElements.ButtonActions> properties={properties} options={options} />
    );
  }
};

export default Loader;
