import Wrapper from './Shell.wrapper';

import ShellProps = com.elem.ShellProps;
import SkinComponent = com.elem.Skin;
import ValidateProps = com.utils.ValidateProps;

/**
 * The base component shell for all components. This may also be considered as the wrapper or the controller.
 */
const Shell = <P, A>({ properties, actions, options, children }: ShellProps<P, A>) => {
  const { renderer, ...otherProperties } = properties;
  // Strict type inference for the Skin component.
  const Skin: SkinComponent<P, A> = renderer;
  return (
    <Wrapper>
      <Skin properties={otherProperties as ValidateProps<P>} actions={actions} options={options}>
        {children}
      </Skin>
    </Wrapper>
  );
};

export default Shell;
