import { ButtonProps } from '@components/inputs';
import { com } from 'src/types/common';

const Skin: com.qbit.Skin<ButtonProps> = (props: com.qbit.SkinProps<ButtonProps>) => {
  const { value, disabled, tabIndex, testId, onClick, className } = props;

  return (
    <button
      className={`py-2 px-4 rounded-md bg-gray-200 font-medium text-gray-800 ${disabled ? 'opacity-60' : 'hover:bg-gray-300'} ${className}`}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {value}
    </button>
  );
};

export default Skin;
