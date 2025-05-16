import { com } from 'src/types/common';
import { AccordionProps } from '@displays/menus';

const AccordionSkin: com.qbit.Skin<AccordionProps> = (props: com.qbit.SkinProps<AccordionProps>) => {
  const { children, className, style, testId } = props;

  return (
    <div className={className} style={style} data-testid={testId}>
      {children}
    </div>
  );
};

export default AccordionSkin;
