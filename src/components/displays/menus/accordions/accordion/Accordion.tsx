import React from 'react';
import { BaseComponent, useGetChildren } from '@components/containers';
import { com } from 'src/types/common';
import { useBindSkin } from './Accordion.hook';
import { AccordionItemProps, AccordionProps } from './properties';

/**
 * Accordion component.
 * @param props
 * @returns
 */
const Accordion: com.qbit.Shell<AccordionProps, AccordionItemProps> = (
  props: com.qbit.ShellProps<AccordionProps, AccordionItemProps>,
) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<AccordionProps, AccordionItemProps>(rest, oChildren);

  const { openIndexes, onClick } = useBindSkin(rest, oChildren);

  return (
    <BaseComponent {...rest}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: openIndexes.includes(index),
          onClick: () => onClick(index),
        });
      })}
    </BaseComponent>
  );
};

export default Accordion;
