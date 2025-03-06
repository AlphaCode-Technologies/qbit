import { CardProps } from '@components/index';
import { com } from 'src/types/common';

const Card: com.qbit.Skin<CardProps> = (props) => {
  const { children, testId } = props;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4" data-testid={testId}>
      {children}
    </div>
  );
};

export default Card;
