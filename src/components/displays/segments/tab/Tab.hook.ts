import { TabSkin } from '@skins/defaults';
import { useState } from 'react';

export const useBindSkin = ({ actions }: com.elem.Shell<AlphaElements.TabProperties, AlphaElements.TabAction>) => {
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  const getPropsAndActions = (child: any, index: number) => {
    const childProperties = child.props?.properties ?? {};
    const { renderer, id, testId, disabled } = childProperties;
    const elementRenderer = renderer ?? TabSkin;

    return {
      key: id ?? `tab-${index}`,
      actions: {
        ...actions,
        onClick: () => {
          if (!disabled) {
            setActiveTabId(id ?? `tab-${index}`);
            actions?.onClick?.(id);
          }
        },
      },
      properties: {
        ...childProperties,
        renderer: elementRenderer,
        index,
        id,
        testId: testId,
        disabled: disabled,
        active: activeTabId === (id ?? `tab-${index}`),
      },
    };
  };

  return { getPropsAndActions };
};
