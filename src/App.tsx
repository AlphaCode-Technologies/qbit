import { Option, Select } from '@inputs/choices';
import { DefaultAccordionSkin, ListItemSkin, ListSkin, OptionSkin, SelectSkin } from '@skins/defaults';
import { useState } from 'react';
import { List, ListItem } from '@components/displays';
import { Accordion } from '@components/displays/menus';

const App = () => {
  const [toggled, setToggled] = useState(false);
  const [toggled2, setToggled2] = useState(false);
  const SelectProperties: AlphaElements.SelectProperties = {
    name: 'select',
    value: { value: 'good', label: 'Good' },
    renderer: SelectSkin,
    optionRenderer: OptionSkin,
  };

  const SelectAction: AlphaElements.SelectActions = {
    triggerScrollEnd: () => console.log('Scrolled end'),
  };

  const handleToggle = (newState: boolean) => {
    console.log('Accordion toggled:', newState);
    setToggled(!toggled);
  };

  const handleToggle2 = (newState: boolean) => {
    console.log('Accordion toggled:', newState);
    setToggled2(!toggled2);
  };

  return (
    <div data-id="my-id">
      <Select properties={SelectProperties} actions={SelectAction}>
        <Option properties={{ value: { value: 'good', label: 'Good' } }} />
        <Option properties={{ value: { value: 'bad', label: 'Bad' } }} />
        <Option properties={{ value: { value: 'average', label: 'Average' } }} />
        <Option properties={{ value: { value: 'waste', label: 'Waste' } }} />
      </Select>

      <Accordion
        properties={{
          id: 'accordion-1',
          title: 'Click to Expand',
          renderer: DefaultAccordionSkin,
          content: (
            <>
              <p>sample</p>
              <Accordion
                properties={{
                  id: 'accordion-2',
                  title: 'Click to Expand',
                  renderer: DefaultAccordionSkin,
                  content: 'This is the accordion content. It will be shown when expanded.',
                  isOpen: toggled2,
                }}
                actions={{ onToggle: handleToggle2 }}
              />
            </>
          ),
          isOpen: toggled,
        }}
        actions={{ onToggle: handleToggle }}
      />
      {/* List component */}
      <List
        renderers={{ renderer: ListSkin, childRenderer: ListItemSkin }}
        keyExtractor={(value, i) => `${value}-${i}`}
      >
        <ListItem label="item 1" value="item 1" />
        <ListItem label="item 2" value="item 2" />
        <ListItem label="item 3" value="item 3" />
        <ListItem label="item 4" value="item 4" />
      </List>
    </div>
  );
};

export default App;
