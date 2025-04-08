import { com } from 'src/types/common';
import { BadgeProps } from '@components/displays';

const Skin: com.qbit.Skin<BadgeProps> = (props: com.qbit.SkinProps<BadgeProps>) => {
  const { children, className, keyExtractor, onChange, ...rest } = props;
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Skin;
