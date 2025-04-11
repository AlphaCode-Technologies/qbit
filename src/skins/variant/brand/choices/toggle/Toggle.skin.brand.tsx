import { com } from 'src/types/common';
import { CheckboxItemProps } from '@inputs/choices';

const Skin: com.qbit.Skin<CheckboxItemProps> = (props: com.qbit.SkinProps<CheckboxItemProps>) => {
  const { onChange, disabled, testId, checked, className, style, size = 'sm' } = props;

  const sizeStyles: Record<string, string> = {
    xs: `w-7 h-4 after:h-3 after:w-3 after:top-[2px] after:start-[2px] ${checked ? 'after:translate-x-[calc(105%)]' : ''}`,
    sm: `w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:start-[2px] ${checked ? 'after:translate-x-[calc(100%)]' : ''}`,
    md: `w-14 h-7 after:h-6 after:w-6 after:top-[2px] after:start-[2px] ${checked ? 'after:translate-x-[calc(115%)]' : ''}`,
    lg: `w-16 h-8 after:h-7 after:w-7 after:top-[2px] after:start-[2px] ${checked ? 'after:translate-x-[calc(112%)]' : ''}`,
    xl: `w-20 h-10 after:h-9 after:w-9 after:top-[2px] after:start-[2px] ${checked ? 'after:translate-x-[calc(110%)]' : ''}`,
    xxl: `w-24 h-12 after:h-11 after:w-11 after:top-[2px] after:start-[2px] ${checked ? 'after:translate-x-[calc(108%)]' : ''}`,
  };

  return (
    <div
      className={`relative rounded-full after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all ${checked ? 'bg-violet-600 after:border-white' : 'bg-gray-300'} ${disabled ? 'opacity-50' : ''} ${sizeStyles[size]} ${className ?? ''}`}
      onClick={() => !disabled && onChange(!checked)}
      data-testid={testId}
      style={style}
    />
  );
};

export default Skin;
