import Wrapper from './Wrapper'; // Since it's in the same folder, we can just import it directly.
import { com } from 'src/types/common';

/**
 * The async component shell for components that can have a skeleton component. This may also be considered as the wrapper or the controller.
 */
const AsyncShell = <P, A>({ properties, actions, options }: com.elem.AsyncShellProps<P, A>) => {
  const { renderer, skeleton: Skeleton, isLoading, ...otherProperties } = properties;
  // Strict type inference for the Skin component.
  const Skin: com.elem.Skin<P, A> = renderer;

  return (
    <Wrapper>
      {isLoading && Skeleton && <Skeleton />}
      {!isLoading && (
        <Skin properties={otherProperties as com.utils.ValidateProps<P>} actions={actions} options={options} />
      )}
    </Wrapper>
  );
};

export default AsyncShell;
