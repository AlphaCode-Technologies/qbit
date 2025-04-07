import { DropdownProps } from '@components/displays/menus/dropdown/properties';
import { com } from 'src/types/common';

const DropdownSkin: com.qbit.Skin<DropdownProps> = (props) => {
  const { children } = props;

  return <div className="shadow-lg bg-white rounded p-2 w-56">{children}</div>;
};

export default DropdownSkin;
