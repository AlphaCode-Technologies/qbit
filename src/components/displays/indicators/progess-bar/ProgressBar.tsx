import { Shell } from '@components/containers';
import { useBindSkin } from './ProgressBar.hook';

// Define the Progress Bar component, destructuring `properties` from the props.
const ProgressBar = (props: com.elem.ShellProps<AlphaElements.ProgressBarProperties, any>) => {
  const { properties, options } = useBindSkin(props);

  return <Shell<AlphaElements.ProgressBarProperties, any> properties={properties} options={options} />;
};

export default ProgressBar;
