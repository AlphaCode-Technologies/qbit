import { Shell } from '@components/containers';
import { useBindSkin } from '@inputs/text/Text.hook.ts';

// Define the Text component, destructuring `properties` and `actions` from the props.

const Text = (props: com.elem.ShellProps<AlphaElements.TextProperties, AlphaElements.TextAction>) => {
  const { properties = {}, actions = {}, options = {} } = useBindSkin(props);

  // Render the custom Renderer component, passing down the remaining properties and actions.
  return (
    <Shell<AlphaElements.TextProperties, AlphaElements.TextAction>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default Text;
