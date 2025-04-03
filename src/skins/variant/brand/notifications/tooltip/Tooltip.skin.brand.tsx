import { TooltipProps } from '@components/displays';
import { com } from 'src/types/common';

const Skin: com.qbit.Skin<TooltipProps> = (props: com.qbit.SkinProps<TooltipProps>) => {
  const { children, className, position, style } = props;

  const arrowStyles: Record<string, string> = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-800',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-800',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-800',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-800',
  };

  return (
    <div className={`relative ${className ?? ''}`} style={style}>
      <div className={`absolute transform border-4 border-transparent ${arrowStyles[position]}`} />
      <div className="rounded-md bg-gray-800 text-gray-200 py-0.5 px-2">{children}</div>
    </div>
  );
};

export default Skin;
