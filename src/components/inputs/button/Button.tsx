import { Shell } from '@components/containers';
import { useBindSkin } from '@inputs/button/Button.hook.ts';

const Button = (props: com.elem.ShellProps<AlphaElements.ButtonProperties, AlphaElements.ButtonActions>) => {
  const { properties = {}, actions = {}, options = {} } = useBindSkin(props);

  return (
    <Shell<AlphaElements.ButtonProperties, AlphaElements.ButtonActions>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default Button;
