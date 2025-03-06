import { useGetSkin } from './hooks';
import { com } from 'src/types/common';

const BaseComponent = <P extends com.qbit.BaseProps, C extends com.qbit.BaseProps = any>(
  props: com.qbit.ShellProps<P, C>,
) => {
  const { renderers, children, ...rest } = props;
  const renderProps = useGetSkin<P, C>(renderers);

  const { renderer: Skin } = renderProps;

  return Skin && <Skin {...(rest as P)}>{children}</Skin>;
};

export default BaseComponent;
