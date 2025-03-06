import { CheckboxItemProps, CheckboxProps } from '@components/inputs/choices';
import { com } from 'src/types/common';

const sizeMap = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

const SwitchSkin: com.qbit.Shell<CheckboxProps, CheckboxItemProps> = (
  properties: com.qbit.ShellProps<CheckboxProps, CheckboxItemProps>,
) => {
  const { value, disabled, size } = properties;
  const { onChange } = properties;
  const dimension = sizeMap[size as AlphaElements.Size] || sizeMap['md'];

  //the translateY value
  const translateY = value ? -dimension : dimension;

  return (
    <div
      className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none flex flex-col mt-10' : 'cursor-pointer flex flex-col mt-10'}`}
    >
      {onChange && (
        <div
          className={`rounded-full flex items-center justify-center cursor-pointer shadow-md transition-colors duration-300 ease-in-out ${
            properties.value ? 'bg-green-500' : 'bg-gray-300'
          }`}
          style={{
            width: `${dimension * 2}px`,
            height: `${dimension * 4}px`,
          }}
          onClick={() => {
            onChange(!value as any);
          }}
        >
          <div
            className={`rounded-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
            style={{
              width: `${dimension}px`,
              height: `${dimension}px`,
              transform: `translateY(${translateY}px)`,
            }}
          ></div>
        </div>
      )}
      <p className="mt-4 text-lg font-medium">
        {value ? <span className="text-green-600">On</span> : <span className="text-red-600">Off</span>}
      </p>
    </div>
  );
};

export default SwitchSkin;
