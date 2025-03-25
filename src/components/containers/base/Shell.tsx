import Wrapper from './Wrapper';
import { com } from 'src/types/common';

/**
 * The base component shell for all components. This may also be considered as the wrapper or the controller.
 */
const Shell = <P, A>({ properties, actions, options }: com.elem.ShellProps<P, A>) => {
  const { renderer, ...otherProperties } = properties;
  // Strict type inference for the Skin component.
  const Skin: com.elem.Skin<P, A> = renderer;
  return (
    <Wrapper>
      <Skin properties={otherProperties as com.utils.ValidateProps<P>} actions={actions} options={options} />
    </Wrapper>
  );
};

export default Shell;
