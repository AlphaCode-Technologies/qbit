/**
 * Base hooks for the container components.
 * @author Dulan Sudasinghe
 * @created 02/01/2024
 */
import { swallow } from '@utils/helpers';
import { Children, cloneElement, ReactElement, useMemo } from 'react';

//#region Type aliases
type ValidTypes = com.utils.ValidTypes;
type Property<P extends object> = com.utils.Property<P>;
type BaseProps<V extends ValidTypes> = com.elem.BaseProps<V>;
type RenderProps<P extends BaseProps<ValidTypes>, C extends BaseProps<ValidTypes> = any> = com.elem.RenderProps<P, C>;
type SkinProps<P extends BaseProps<ValidTypes>> = com.elem.SkinProps<P>;
type ComponentProps<P extends BaseProps<ValidTypes>, C extends BaseProps<ValidTypes> = any> = com.elem.ComponentProps<
  P,
  C
>;
//#endregion

/**
 * Check for valid renders.
 *
 * Renderer object can have a renderer according to the following truth table
 *
 * | renderer | childRenderer | Result |
 * |----------|---------------|--------|
 * |    0     |       0       | Error  |
 * |    0     |       1       | Error  | A child renderer is not allowed without a renderer
 * |    1     |       0       | OK     | A renderer is required
 * |    1     |       1       | OK     | Both renderer and childRenderer are allowed. Which means the component has children
 *
 * @param renderers
 * @returns
 */
const useGetSkin = <P extends BaseProps<ValidTypes>, C extends BaseProps<ValidTypes> = any>(
  renderers: RenderProps<P, C> = {},
) => {
  const { renderer, childRenderer } = renderers;

  if (!renderer && !childRenderer) {
    throw new Error('No Renderer specified');
  }
  if (!renderer) {
    throw new Error('Renderer is required');
  }

  return useMemo(
    () =>
      ({
        childRenderer,
        renderer,
      }) as RenderProps<P, C>,
    [childRenderer, renderer],
  );
};

/**
 * Compute the children of the parent component and their properties.
 * Inject necessary properties to the children.
 *
 * @param props
 * @param renderProps
 * @returns
 */
const useGetChildren = <P extends BaseProps<ValidTypes>, C extends BaseProps<ValidTypes> = any>(
  //   props: Omit<ComponentProps<P, C>, 'renderers'>,
  props: SkinProps<P>,
  renderProps: RenderProps<P, C>,
) => {
  const { children, keyExtractor: parentKeyExtractor, disabled: parentDisabled = false } = props;

  // Validate if children are available
  if (Children.count(children) === 0) {
    throw new Error('No children specified');
  }

  // If there is no keyExtractor for the children;
  if (!parentKeyExtractor) {
    throw new Error('No keyExtractor specified');
  }

  // Get the child renderer from parent props
  const { childRenderer: defaultRenderer } = renderProps;

  const computedChildren = (children as ReactElement[]).map((child, i) => {
    // extract child props
    const { props: childProps } = child;

    const {
      value: childValue,
      disabled: childDisabled,
      keyExtractor: childKeyExtractor,
      renderers: { renderer = defaultRenderer, childRenderer } = {},
      children: grandChildren,
      ...restChildProps
    } = childProps as ComponentProps<P, C>;

    // Determining disabled state
    const disabled = parentDisabled || childDisabled;

    // If disabled, then all actions should be disabled
    const otherProps = { ...restChildProps } as unknown as Property<P>;

    if (disabled) {
      for (const propertyName in otherProps) {
        // Assume any property starting with on is an event
        if (propertyName.startsWith('on')) {
          otherProps[propertyName] = swallow as unknown as P[Extract<keyof P, string>];
        }
      }
    }

    return cloneElement(
      child,
      {
        key: parentKeyExtractor(childValue, i),
        ...otherProps,
        // Pass down the properties of parent
        keyExtractor: childKeyExtractor ?? parentKeyExtractor,
        value: childValue,
        renderers: { renderer, childRenderer },
        disabled,
      },
      grandChildren,
    );
  });

  return computedChildren;
};

export { useGetChildren, useGetSkin };
