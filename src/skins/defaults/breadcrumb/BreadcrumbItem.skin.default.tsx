const BreadcrumbItemSkin: com.qbit.Skin<BreadcrumbItemProps> = (props) => {
  const { href, disabled, testId, name, active, onClick } = props;

  return (
    <div
      className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
      data-testid={testId}
    >
      {active ? (
        <span className="text-blue-500 font-medium" onClick={() => onClick ?? onClick}>
          {name}
        </span>
      ) : (
        <a href={href} className="text-gray-500 hover:text-green-600" onClick={() => onClick ?? onClick}>
          {name}
        </a>
      )}
      {/* {index !== undefined && total !== undefined && index < total - 1 && <span className="mx-2 text-gray-400">/</span>}{' '} */}
    </div>
  );
};

export default BreadcrumbItemSkin;
