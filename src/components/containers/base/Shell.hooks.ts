import { cloneElement, isValidElement, ReactNode, useMemo } from 'react';

import ShellProps = com.elem.ShellProps;
import SubShellProps = com.elem.SubShellProps;
import SkinComponent = com.elem.Skin;
import Properties = com.elem.Properties;

const useGetComputedChildren = <P, A>(props: ShellProps<P, A>) => {
  const { properties: oProperties, children: oChildren, renderers: oRenderers } = props;
  const { disabled: pDisabled = false } = oProperties;
  const { subRenderer: oSubRenderer } = oRenderers;

  const children = useMemo(() => {
    return (
      (oChildren as ReactNode[])?.map((child) => {
        let computedChild = null;
        if (child && isValidElement(child)) {
          const { props } = child ?? {};
          const {
            properties: { disabled: cDisabled = pDisabled, ...cProperties },
            renderers: { renderer: cRenderer = oSubRenderer } = {},
            children: cChildren,
          } = props as SubShellProps<P, A>;

          // Computing all properties for child component
          const computedProps: Properties<typeof props> = {
            properties: { ...cProperties, disabled: cDisabled },
            renderers: { renderer: cRenderer },
          };

          computedChild = cloneElement(child, { ...props, ...computedProps }, cChildren);
        }

        return computedChild;
      }) ?? null
    );
  }, [oChildren, oSubRenderer, pDisabled]);

  return { children };
};

const useShell = <P, A>(props: ShellProps<P, A>) => {
  const { properties, actions, options, renderers } = props;
  const { renderer } = renderers;

  const Skin: SkinComponent<P, A> = renderer;

  const { children } = useGetComputedChildren<P, A>(props);

  return {
    Skin,
    properties,
    actions,
    options,
    children,
  };
};

export default useShell;
