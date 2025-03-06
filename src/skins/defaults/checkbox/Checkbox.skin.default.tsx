import { CheckboxProps } from '@components/inputs/choices';
import { com } from 'src/types/common';

const CheckboxSkin: com.qbit.Skin<CheckboxProps> = (props: com.qbit.SkinProps<CheckboxProps>) => {
  const { children, onChange, ...rest } = props;
  return <div {...rest}>{children}</div>;
};

export default CheckboxSkin;
