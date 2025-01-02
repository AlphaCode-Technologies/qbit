import { Shell } from '@components/containers';
import { useBindSkin } from './Checkbox.hooks';

const Checkbox = (props: com.elem.Shell<AlphaElements.CheckboxProperties, AlphaElements.CheckBoxAction>) => {
  const { properties, actions, options } = useBindSkin(props);
  const { disabled, id, name, value } = properties;
  const { onChange } = actions;

  return (
    <>
      <input
        id={id}
        type="checkbox"
        name={name}
        onClick={() => onChange?.()}
        defaultChecked={value}
        checked={value}
        disabled={disabled}
        className="hidden"
      />
      <Shell<AlphaElements.CheckboxProperties, AlphaElements.CheckboxProperties>
        properties={properties}
        actions={actions}
        options={options}
      />
    </>
  );
};

export default Checkbox;
