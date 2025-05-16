import { com } from 'src/types/common';
import { EmptyStateProps } from '@components/displays/segments/empty-state/properties';

const EmptyStateSkin: com.qbit.Skin<EmptyStateProps> = (props: com.qbit.SkinProps<EmptyStateProps>) => {
  const { icon, message, actions, testId, title, className } = props;

  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 border-2 border-gray-200 rounded-lg ${className}`}
      data-testid={testId}
    >
      {icon && <div className={`flex items-center justify-center mb-4`}>{icon}</div>}
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 mb-6"> {message} </p>
      <div className="flex gap-3 w-full justify-center"> {actions} </div>
    </div>
  );
};

export default EmptyStateSkin;
