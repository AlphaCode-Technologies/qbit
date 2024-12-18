import React, { Children, cloneElement, ReactElement, RefObject, useRef } from 'react';
import { useBindSkin } from './Select.hook';
import { Shell } from '@components/containers';

const Select = ({ children, ...rest }: com.elem.Shell<AlphaElements.SelectProperties, AlphaElements.SelectActions>) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const optionRef: RefObject<HTMLDivElement> = useRef(null);
  const { properties, actions, options, selectedValue, isOpen, getPropsAndActions, onClickSelectOption, handleScroll } =
    useBindSkin(rest, ref, optionRef);
  const { optionContainerClassName = 'rounded p-4 bg-slate-100 mt-1 min-h-64 max-h-72' } = properties;

  return (
    <div ref={ref} className="w-fit">
      <div onClick={() => onClickSelectOption()}>
        <Shell<AlphaElements.SelectOptionProps, AlphaElements.SelectActions>
          properties={{ ...properties, value: selectedValue }}
          actions={actions}
          options={options}
        />
      </div>
      {isOpen && (
        <div ref={optionRef} onScroll={handleScroll} className={`absolute overflow-auto ${optionContainerClassName}`}>
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
