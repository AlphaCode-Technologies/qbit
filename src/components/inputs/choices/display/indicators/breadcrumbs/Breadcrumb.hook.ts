import { BreadcrumbsSkin } from '@skins/defaults';

// Custom hook `useBreadcrumbSkin` that binds properties, actions, and rendering logic for the breadcrumb component.
export const useBreadcrumbSkin = (params: AlphaElements.BreadcrumbProps) => {
  const { actions } = params;

  // Function to generate properties and actions for each breadcrumb item
  const getPropsAndActions = (child: any, index: number) => {
    const childProperties = child.props?.properties ?? {};
    const { renderer: Renderer, id, testId } = childProperties;
    // Determine the renderer: use the provided Renderer or fallback to BreadcrumbsSkin
    const elementRenderer = Renderer ?? BreadcrumbsSkin;

    return {
      key: id ?? `breadcrumb-${index}`,
      actions: actions,
      properties: {
        ...childProperties,
        renderer: elementRenderer,
        index,
        id,
        testId: testId,
      },
    };
  };

  return { getPropsAndActions };
};
