import { com } from 'src/types/common';
import { BreadcrumbItemProps } from '@components/index';

const BreadcrumbItemSkin: com.qbit.Skin<BreadcrumbItemProps> = (props) => {
  const { href, disabled, testId, value, active, splitter, className, keyExtractor, childrenCount, ...rest } = props;

  return (
    <li
      className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className ?? ''}`}
      data-testid={testId}
      {...rest}
    >
      {active ? (
        <span className="text-blue-500 font-medium"> {value} </span>
      ) : (
        // TODO: Need to change as Link
        <a href={href} className="text-gray-500 hover:text-green-600">
          {value}
        </a>
      )}
      {splitter && <span className="mx-2 text-gray-400">{splitter}</span>}
    </li>
  );
};

export default BreadcrumbItemSkin;
