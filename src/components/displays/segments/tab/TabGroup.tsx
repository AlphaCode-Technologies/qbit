import { Children, cloneElement, ReactElement, useState } from 'react';
import { useBindSkin } from './Tab.hook';

const TabGroup = (params: com.elem.Shell<AlphaElements.TabProperties, AlphaElements.TabAction>) => {
  const { children, properties, actions } = params;
  const { getPropsAndActions } = useBindSkin(params);
  const [activeTabId, setActiveTabId] = useState(properties[0]?.id ?? null);

  const handleTabClick = (id: string | null) => {
    setActiveTabId(id);
    actions?.onClick?.(id);
  };

  return (
    <div className="flex flex-col">
      <ul className="flex space-x-4 border-b">
        {Children.map(children as ReactElement[], (child: ReactElement, index: number) => {
          const { key, actions, properties } = getPropsAndActions(child, index);
          return (
            <li key={key} className="cursor-pointer">
              {cloneElement(child, {
                properties: { ...properties, active: activeTabId === properties.id },
                actions: { ...actions, onClick: () => handleTabClick(properties.id) },
              })}
            </li>
          );
        })}
      </ul>

      {/* Active Tab Content */}
      <div className="mt-4">
        {properties
          .filter((tab: any) => tab.id === activeTabId)
          .map((tab: any) => (
            <div key={tab.id}>{tab.content}</div>
          ))}
      </div>
    </div>
  );
};

export default TabGroup;
