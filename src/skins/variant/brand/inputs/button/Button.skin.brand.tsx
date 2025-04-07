import { com } from 'src/types/common';
import { ButtonProps } from '@components/inputs';

const Skin: com.qbit.Skin<ButtonProps> = (props: com.qbit.SkinProps<ButtonProps>) => {
  const {
    type,
    value,
    disabled,
    tabIndex,
    testId,
    className,
    style,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
    <button
      type={type}
      className={`focus:outline-none text-white bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 ${disabled ? 'opacity-60' : 'hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 '} ${className ?? ''}`}
      style={style}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid={testId}
    >
      {value}
    </button>
  );
};

export default Skin;
