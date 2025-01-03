import { Children, cloneElement, ReactElement } from 'react';
import { useBindSkin } from './ProgressStep.hook';

const ProgressStepGroup = (
  params: com.elem.Shell<AlphaElements.ProgressStepProperties, AlphaElements.ProgressStepAction>,
) => {
  const { children } = params;
  const { getPropsAndActions } = useBindSkin(params);

  return (
    <div className="flex justify-between py-4">
      <ul className="flex space-x-4">
        {Children.map(children as ReactElement[], (child: ReactElement, index: number) => {
          const { key, actions, properties } = getPropsAndActions(child, index);

          return (
            <li key={key} className="flex items-center">
              {cloneElement(child, {
                properties: { ...properties, index, total: children.length },
                actions,
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProgressStepGroup;
