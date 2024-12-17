import { CheckboxSkin } from '@skins/defaults';
import { FC, PropsWithChildren, useState } from 'react';

const Checkbox: FC<PropsWithChildren<AlphaElements.CheckboxProps>> = ({ properties, actions }) => {
  // passing renaming props ('rest') and a default skin as renderer
  const { Renderer = CheckboxSkin, ...rest } = properties;
  const { value, disabled, id, name } = properties;
  const { onChange } = actions ?? {};
  const [selectedValue, setSelectedValue] = useState(value);

  const handleClick = () => {
    onChange?.(!selectedValue);
    setSelectedValue(!selectedValue);
  };

  return (
    <>
      <input
        id={id}
        type="checkbox"
        name={name}
        onClick={() => {
          handleClick();
        }}
        defaultChecked={selectedValue}
        checked={selectedValue}
        disabled={disabled}
        className="hidden"
      />
      <Renderer properties={{ ...rest, value: selectedValue }} actions={{ onChange: handleClick }} />
    </>
  );
};

export default Checkbox;
