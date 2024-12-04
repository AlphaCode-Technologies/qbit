import React, { Children, cloneElement, ReactElement } from 'react';
import { DefaultSkin } from './skins';
import { useBindSkin } from './Radio.hook';

const RadioGroup = ({ children, horizontal, ...rest }: AlphaElements.RadioGroupProps) => {
  const { name, getPropsAndActions } = useBindSkin(rest, DefaultSkin);
  return (
    <div className={`${horizontal ? 'flex' : 'block'}`}>
      {Children.map(children as ReactElement[], (child: ReactElement, i: number) => {
        const { key, properties, actions } = getPropsAndActions(child, i);
        const { selected, disabled } = properties;
        return (
          <React.Fragment key={key}>
            <input
              type="radio"
              name={name}
              checked={selected}
              disabled={disabled}
              onChange={() => {}}
              className="hidden"
            />
            {cloneElement(child, {
              properties,
              actions,
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default RadioGroup;
