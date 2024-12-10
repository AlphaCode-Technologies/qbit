import React, { Children, cloneElement, ReactElement, RefObject, useRef } from 'react';
import { useBindSkin } from './Select.hook';

const Select = ({ children, ...rest }: AlphaElements.SelectProps) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const { properties, actions, selectedValue, optionVisible, getPropsAndActions, setOptionVisible } = useBindSkin(
    rest,
    ref,
  );
  const { Renderer, optionContainerClassName = 'rounded p-4 bg-slate-100 mt-1 m-h-72' } = properties;

  return (
    <div ref={ref} className="w-fit">
      <div onClick={() => setOptionVisible(true)}>
        <Renderer properties={{ ...properties, value: selectedValue }} actions={actions} />
      </div>
      {optionVisible && (
        <div className={`absolute overflow-auto ${optionContainerClassName}`}>
          {Children.map(children as ReactElement[], (child: ReactElement, i: number) => {
            const { key, properties, actions } = getPropsAndActions(child, i);
            return (
              <React.Fragment key={key}>
                {cloneElement(child, {
                  properties,
                  actions,
                })}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
