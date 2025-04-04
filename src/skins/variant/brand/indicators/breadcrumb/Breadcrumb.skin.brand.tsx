import { com } from 'src/types/common';
import { BreadcrumbProps } from '@components/displays';

const Skin: com.qbit.Skin<BreadcrumbProps> = (props: com.qbit.SkinProps<BreadcrumbProps>) => {
  const { children, className, style, onClick, onMouseUp, onMouseDown, onMouseLeave, onMouseEnter } = props;

  return (
    <ul
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={`border-y flex gap-2 p-3 ${className ?? ''}`}
      style={style}
    >
      {children}
    </ul>
  );
};

export default Skin;
