import React, { Children, cloneElement, ReactElement } from 'react';
import { useBindSkin } from './Radio.hook';

// Destructure `name` and `getPropsAndActions` from the custom hook `useBindSkin`,
// passing remaining props (`rest`) and a default skin (`DefaultSkin`).
const RadioGroup = ({ children, ...rest }: AlphaElements.RadioGroupProps) => {
  const { name, horizontal, getPropsAndActions } = useBindSkin(rest);
  return (
    // Apply a conditional class to arrange children horizontally or vertically based on the `horizontal` prop.
    <div className={`${horizontal ? 'flex' : 'block'}`}>
      {Children.map(children as ReactElement[], (child: ReactElement, i: number) => {
        // For each child, extract a unique key, properties, and actions using `getPropsAndActions`.
        const { key, properties, actions } = getPropsAndActions(child, i);
        const { value, selected, disabled } = properties;
        return (
          <React.Fragment key={key}>
            <input
              type="radio"
              name={name}
              value={value}
              checked={selected}
              disabled={disabled}
              onChange={() => {}}
              className="hidden"
            />
            {/* Clone the child element, injecting the extracted properties and actions for customization. */}
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
