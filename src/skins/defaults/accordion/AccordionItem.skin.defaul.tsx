import { useState } from 'react';

const AccordionItemSkin: com.qbit.Skin<AccordionItemProps> = (props) => {
  const { label, content, children, onChange, isOpen, ...rest } = props;
  const [isOpened, setIsOpened] = useState(false);

  const toggleOpen = () => {
    setIsOpened(!isOpen && !isOpened);
    if (onChange) {
      onChange(!isOpen && !isOpened);
    }
  };

  return (
    <div {...rest} className="accordion-item">
      <button
        className="bg-gray-100 hover:bg-gray-200 px-4 py-2 cursor-pointer font-medium flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen || isOpened}
      >
        <span>{label}</span>
        <span className="flex items-center">
          {isOpen || isOpened ? (
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
              <path d="M18 15l-6-6-6 6" />
            </svg>
          ) : (
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
              <path d="M6 9l6 6 6-6" />
            </svg>
          )}
        </span>
      </button>
      {isOpen ||
        (isOpened && (
          <div className="bg-white px-4 py-2 space-y-2">
            {children}
            {content && <div className="ml-4">{content}</div>}
          </div>
        ))}
    </div>
  );
};

export default AccordionItemSkin;
