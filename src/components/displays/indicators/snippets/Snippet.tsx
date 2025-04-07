import { com } from 'src/types/common';
import { SnippetProps } from './properties';
import { BaseComponent } from '@components/containers';
import useBindSkin from './Snippet.hooks';

const Snippet: com.qbit.Shell<SnippetProps> = (props: com.qbit.ShellProps<SnippetProps>) => {
  const { value, testId } = useBindSkin(props);

  return (
    <BaseComponent {...props}>
      <div style={{ whiteSpace: 'pre' }} data-testid={testId}>
        <div dangerouslySetInnerHTML={{ __html: value ?? '' }}></div>
      </div>
    </BaseComponent>
  );
};

export default Snippet;
