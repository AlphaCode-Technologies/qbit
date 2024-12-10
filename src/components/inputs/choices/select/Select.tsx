import React, { Children, cloneElement, ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { useBindSkin } from './Select.hook';

const Select = ({ children, ...rest }: AlphaElements.SelectProps) => {
  const { properties, actions, getPropsAndActions } = useBindSkin(rest);
  const { Renderer, optionContainerClassName = 'rounded p-4 bg-slate-100 mt-1 m-h-72' } = properties;
  const [optionVisible, setOptionVisible] = useState(false);
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const handleOutSideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      setOptionVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutSideClick);
    return () => document.removeEventListener('click', handleOutSideClick);
  });

  return (
    <div ref={ref} className="w-fit" onClick={() => setOptionVisible(true)}>
      <Renderer properties={rest} actions={actions} />
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
