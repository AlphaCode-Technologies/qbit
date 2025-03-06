import { BreadcrumbItemProps } from '@components/index';
import { com } from 'src/types/common';

const BreadcrumbItemSkin: com.qbit.Skin<BreadcrumbItemProps> = (props) => {
  const { href, disabled, testId, name, active, onClick, index, childrenCount } = props;

  return (
    <div
      onClick={(e: any) => onClick?.(e)}
      className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
      data-testid={testId}
    >
      {active ? (
        <span className="text-blue-500 font-medium"> {name} </span>
      ) : (
        <a href={href} className="text-gray-500 hover:text-green-600">
          {name}
        </a>
      )}
      {index !== undefined && childrenCount !== undefined && index < childrenCount - 1 && (
        <span className="mx-2 text-gray-400">/</span>
      )}
    </div>
  );
};

export default BreadcrumbItemSkin;
