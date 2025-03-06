import { BaseComponent } from '@components/containers';
import { CheckboxItemProps } from './properties';
import { com } from 'src/types/common';

/**
 * Checkbox item component.
 * @param props
 * @returns
 */
const CheckboxItem: com.qbit.Shell<CheckboxItemProps> = (props) => {
  const { name, checked, onChange, disabled } = props;

  return (
    <>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        disabled={disabled}
        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 hidden"
      />
      <BaseComponent {...props} />
    </>
  );
};

export default CheckboxItem;
