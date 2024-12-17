import React, { Children, cloneElement, ReactElement, RefObject, useRef } from 'react';
import { useBindSkin } from './Select.hook';

const Select = ({ children, ...rest }: AlphaElements.SelectProps) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const optionContainer: RefObject<HTMLDivElement> = useRef(null);
  const { properties, actions, selectedValue, isOpen, getPropsAndActions, setIsOpen } = useBindSkin(rest, ref);
  const { triggerScrollEnd } = actions ?? {};
  const {
    disabled,
    Renderer,
    optionContainerClassName = 'rounded p-4 bg-slate-100 mt-1 min-h-64 max-h-72',
  } = properties;

  const handleScroll = () => {
    const div = optionContainer.current;
    if (div) {
      const scrollTop = div.scrollTop;
      const scrollHeight = div.scrollHeight;
      const clientHeight = div.clientHeight;

      // Check if the user has scrolled to the bottom of the div
      if (scrollTop + clientHeight >= scrollHeight) {
        triggerScrollEnd?.();
      }
    }
  };

  return (
    <div ref={ref} className="w-fit">
      <div onClick={() => !disabled && setIsOpen(true)}>
        <Renderer properties={{ ...properties, value: selectedValue }} actions={actions} />
      </div>
      {isOpen && (
        <div
          ref={optionContainer}
          onScroll={triggerScrollEnd && handleScroll}
          className={`ae-select-element-container absolute overflow-auto ${optionContainerClassName}`}
        >
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
