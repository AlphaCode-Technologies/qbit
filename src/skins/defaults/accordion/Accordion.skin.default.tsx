import { AccordionProps } from '@components/displays/menus';
import { com } from 'src/types/common';

const AccordionSkin: com.qbit.Skin<AccordionProps> = (props: com.qbit.SkinProps<AccordionProps>) => {
  const { children, className } = props;

  return (
    <div className={`border border-gray-300 rounded-md divide-y divide-gray-200 ${className ?? ''}`}>{children}</div>
  );
};

export default AccordionSkin;
