import { SnippetProps } from '@components/displays/indicators';
import { com } from 'src/types/common';

const Snippet: com.qbit.Skin<SnippetProps> = (props) => {
  const { children, testId, height, width } = props;

  return (
    <div className=" bg-gray-700 shadow text-white overflow-auto" style={{ height, width }} data-testid={testId}>
      {/* <code className="!whitespace-pre">{children}</code> */}
      {children}
    </div>
  );
};

export default Snippet;
