import { BaseComponent, useGetChildren } from '@components/containers';
import { useState } from 'react';
import TabItem from './TabItem';
import { TabItemProps, TabProps } from './properties';
import { com } from 'src/types/common';

const Tab: com.qbit.Shell<TabProps, TabItemProps> = (props) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<TabProps, TabItemProps>(rest, oChildren);

  const [activeTab, setActiveTab] = useState<string | null>(
    children.find((child) => child.props.active)?.props.name || null,
  );

  const handleClick = (name: string) => {
    setActiveTab(name);
    rest.onClick?.({ target: { value: name } } as unknown as React.MouseEvent<HTMLDivElement>);
  };

  return (
    <BaseComponent {...rest}>
      {/* Tab Navigation */}
      <div className="tab-navigation">
        {children.map((child) => (
          <TabItem
            key={child.props.name}
            {...child.props}
            active={child.props.name === activeTab}
            onClick={() => handleClick(child.props.name)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {children.map(
          (child) => child.props.name === activeTab && <div key={child.props.name}>{child.props.content}</div>,
        )}
      </div>
    </BaseComponent>
  );
};

export default Tab;
