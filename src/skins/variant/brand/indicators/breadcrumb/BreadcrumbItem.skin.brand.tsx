import { com } from 'src/types/common';
import { BreadcrumbItemProps } from '@components/displays';

const Skin: com.qbit.Skin<BreadcrumbItemProps> = (props: com.qbit.SkinProps<BreadcrumbItemProps>) => {
  const {
    active,
    className,
    disabled,
    href,
    style,
    value,
    splitter,
    onClick,
    onMouseUp,
    onMouseDown,
    onMouseLeave,
    onMouseEnter,
  } = props;

  return (
    <li
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={`inline-flex gap-2 font-medium text-gray-500 ${
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'
      } ${className}`}
      style={style}
    >
      {!disabled && href ? (
        <a href={href} className={active ? 'text-violet-600' : ''}>
          {value}
        </a>
      ) : (
        <span className={active ? 'text-violet-600' : ''}>{value}</span>
      )}
      {splitter && <span className="text-gray-400 font-bold">{splitter}</span>}
    </li>
  );
};
export default Skin;
