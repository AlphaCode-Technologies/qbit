import Wrapper from './Shell.wrapper';

import SubShellProps = com.elem.SubShellProps;
import SkinComponent = com.elem.Skin;

/**
 * The 'SubShell' is to be uses in conjunction with the 'Shell' component.
 * It is used to render the child components of the Shell component.
 */
const SubShell = <P, A>({ properties, actions, options, renderers, children }: SubShellProps<P, A>) => {
  const { renderer } = renderers ?? {};

  /*
    if the renderer is not available, a default renderer will be injected by the Shell. 
  */
  const Skin: SkinComponent<P, A> = renderer as unknown as SkinComponent<P, A>;
  return (
    <Wrapper>
      {Skin && (
        <Skin properties={properties} actions={actions} options={options}>
          {children}
        </Skin>
      )}
    </Wrapper>
  );
};

export default SubShell;
