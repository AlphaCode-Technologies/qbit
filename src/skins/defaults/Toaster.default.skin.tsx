import { ToasterProps } from '@components/index';
import { com } from 'src/types/common';

const Toaster: com.qbit.Skin<ToasterProps> = (props: com.qbit.SkinProps<ToasterProps>) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};

export default Toaster;
