import { useBindSkin } from '@inputs/button/Button.hook.ts';

// Define the Button component, destructuring `properties` and `actions` from the props.
const Button = ({ properties, actions }: AlphaElements.ButtonProps) => {
  const { getPropsAndActions } = useBindSkin({ properties, actions });

  // Passing down the remaining properties and actions.
  const { properties: boundProperties, actions: boundActions } = getPropsAndActions();

  // Extract the custom Renderer component from the boundProperties.
  const { Renderer } = boundProperties;

  // Render the custom Renderer component, passing down the remaining properties and actions.
  return <Renderer properties={boundProperties} actions={boundActions} />;
};

export default Button;
