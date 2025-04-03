import { com } from 'src/types/common';
import { AccordionItemProps } from '@displays/menus';

const AccordionItemSkin: com.qbit.Skin<AccordionItemProps> = (props: com.qbit.SkinProps<AccordionItemProps>) => {
  const { label, children, className, style, onClick, isOpen, testId } = props;

  return (
    <div className={className} style={style} data-testid={testId}>
      <button
        type="button"
        className="bg-gray-100 hover:bg-gray-200 px-4 py-3 cursor-pointer font-medium flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
        </svg>
      </button>

      {isOpen && <div className="bg-white px-4 py-2">{children}</div>}
    </div>
  );
};

export default AccordionItemSkin;
