import { com } from 'src/types/common';
import { CheckboxItemProps } from '@inputs/choices';

const Skin: com.qbit.Skin<CheckboxItemProps> = (props: com.qbit.SkinProps<CheckboxItemProps>) => {
  const { onChange, id, name, disabled, testId, checked, className, style, value } = props;

  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      value={value}
      checked={checked}
      onChange={(e) => onChange && onChange(e.target.checked)}
      disabled={disabled}
      data-testid={testId}
      className={`w-6 h-6 border-2 border-gray-300 rounded-md appearance-none cursor-pointer bg-no-repeat bg-center bg-[size:80%] transition-all duration-200 ease-in-out checked:bg-violet-600 checked:border-violet-600 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-violet-500 ${className ?? ''}`}
      style={{
        backgroundImage: checked
          ? `url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e%3c/svg%3e")`
          : 'none',
        ...style,
      }}
    />
  );
};

export default Skin;
