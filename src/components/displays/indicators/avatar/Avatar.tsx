import { useBindSkin } from './Avatar.hook';

// Define the Loader component, destructuring `properties` from the props.
const Avatar = ({ properties, actions }: AlphaElements.AvatarProps) => {
  const { getPropsAndActions } = useBindSkin({ properties, actions });

  // Passing down the remaining properties and actions.
  const {
    properties: { Renderer, ...boundProperties },
    actions: boundActions,
  } = getPropsAndActions();

  // Render the custom Renderer component, passing down the remaining properties and actions.
  return <Renderer properties={boundProperties} actions={boundActions} />;
};

export default Avatar;
