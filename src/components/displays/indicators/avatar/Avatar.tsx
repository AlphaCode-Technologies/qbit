import { Shell } from '@components/containers';
import { useBindSkin } from './Avatar.hook';

const Avatar = (props: com.elem.Shell<AlphaElements.AvatarProperties, AlphaElements.AvatarActions>) => {
  const { getPropsAndActions } = useBindSkin(props);
  const { properties, actions, options } = getPropsAndActions();

  return (
    <Shell<AlphaElements.ButtonProperties, AlphaElements.ButtonActions>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default Avatar;
