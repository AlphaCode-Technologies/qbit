import { BaseComponent } from '@components/containers';
import { AccordionItemProps } from './properties';

/**
 * Accordion item component.
 * @param props
 * @returns
 */
const AccordionItem: com.qbit.Shell<AccordionItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default AccordionItem;
