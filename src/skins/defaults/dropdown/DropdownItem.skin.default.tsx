import { DropdownItemProps } from '@components/displays/menus/dropdown/properties';
import { useEffect } from 'react';
import { com } from 'src/types/common';

const DropdownItemSkin: com.qbit.Skin<DropdownItemProps> = (props) => {
  const { name, icon, link, onChange, content } = props;

  useEffect(() => {
    console.log('props', props);
  }, [props]);

  return (
    <>
      <a
        href={link ?? '#'}
        onClick={(e) => onChange?.(e)}
        className="flex items-center px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
      >
        {icon && <img src={icon} alt={name} className="w-5 h-5 mr-2" />}
        <span>{name}</span>
      </a>
      {content && <div className="">{content}</div>}
    </>
  );
};

export default DropdownItemSkin;
