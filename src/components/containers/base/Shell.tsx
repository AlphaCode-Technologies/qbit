import Wrapper from './Shell.wrapper';
import useShell from './Shell.hooks';

import ShellProps = com.elem.ShellProps;

const Shell = <P, A>(props: ShellProps<P, A>) => {
  const { Skin, properties, actions, options, children } = useShell(props);

  return (
    <Wrapper>
      <Skin properties={properties} actions={actions} options={options}>
        {children}
      </Skin>
    </Wrapper>
  );
};

export default Shell;
