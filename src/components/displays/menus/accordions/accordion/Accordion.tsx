import { BaseComponent, useGetChildren } from '@components/containers';

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

  return <BaseComponent {...rest}>{children}</BaseComponent>;
};

export default Accordion;
