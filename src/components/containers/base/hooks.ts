/**
 * @description Base hooks for the container components.
 * @author Dulan Sudasinghe
 * @created 02/01/2024
 */
import { swallow } from '@utils/helpers';
import { Children, cloneElement, ReactElement, ReactNode, useMemo } from 'react';

/**
 * @description
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
const useGetSkin = <P extends com.qbit.BaseProps, C extends com.qbit.BaseProps = any>(
  renderers: com.qbit.RenderProps<P, C> = {},
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
      }) as com.qbit.RenderProps<P, C>,
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
const useGetChildren = <P extends com.qbit.BaseProps, C extends com.qbit.BaseProps = any>(
  props: com.qbit.ShellProps<P, C>,
  children: ReactNode,
) => {
  const { computedActions } = useGetAction();
  const { keyExtractor: parentKeyExtractor, disabled: parentDisabled = false, ...restParentProps } = props;
  // Validate if children are available
  if (Children.count(children) === 0) {
    throw new Error('No children specified');
  }

  // If there is no keyExtractor for the children;
  if (!parentKeyExtractor) {
    throw new Error('No keyExtractor specified');
  }

  // Get the child renderer from parent props
  const { childRenderer: defaultChildRenderer } = props.renderers ?? {};

  const computedChildren = (children as ReactElement[]).map((child, i) => {
    // extract child props
    const { props: childProps } = child;

    const {
      value: childValue,
      disabled: childDisabled,
      keyExtractor: childKeyExtractor,
      renderers: { renderer = defaultChildRenderer, childRenderer: grandChildRenderer } = {},
      children: grandChildren,
      ...restChildProps
    } = childProps as com.qbit.ShellProps<P, C>;

    if (!renderer) {
      throw new Error('No Renderer specified for children');
    }
    // Determining disabled state
    const disabled = parentDisabled || childDisabled;

    // If disabled, then all actions should be disabled
    let otherProps = { ...restChildProps } as unknown as com.utils.Property<P>;

    if (disabled) {
      for (const propertyName in otherProps) {
        // Assume any property starting with on is an event
        if (propertyName.startsWith('on')) {
          otherProps[propertyName] = swallow as unknown as P[Extract<keyof P, string>];
        }
      }
    } else {
      const parentActionProps = computedActions(restParentProps, childValue);
      otherProps = { ...otherProps, ...parentActionProps };
    }

    return cloneElement(
      child,
      {
        key: parentKeyExtractor(childValue, i),
        ...otherProps,
        // Pass down the properties of parent
        keyExtractor: childKeyExtractor ?? parentKeyExtractor,
        value: childValue,
        renderers: { renderer, childRenderer: grandChildRenderer },
        disabled,
      },
      grandChildren,
    );
  });

  return computedChildren;
};

const useGetAction = () => {
  const computedActions = (props: any, value: any) => {
    const { onChange } = props;
    const parentActions = Object.fromEntries(Object.entries(props).filter(([key]) => key.startsWith('on')));

    return {
      ...parentActions,
      onClick: () => onChange?.({ target: { value } }),
    };
  };

  return { computedActions };
};

export { useGetChildren, useGetSkin };
