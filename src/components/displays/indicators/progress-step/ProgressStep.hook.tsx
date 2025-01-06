import ProgressStepSkin from '@skins/defaults/ProgressStep.default.skin';

export const useBindSkin = ({
  actions,
}: com.elem.Shell<AlphaElements.ProgressStepProperties, AlphaElements.ProgressStepAction>) => {
  const getPropsAndActions = (child: any, index: number) => {
    const childProperties = child.props?.properties ?? {};
    const { renderer, id, testId, disabled } = childProperties;
    const elementRenderer = renderer ?? ProgressStepSkin;

    return {
      key: id ?? `progress-step-${index}`,
      actions: actions,
      properties: {
        ...childProperties,
        renderer: elementRenderer,
        index,
        id,
        testId: testId,
        disabled: disabled,
      },
    };
  };

  return { getPropsAndActions };
};
