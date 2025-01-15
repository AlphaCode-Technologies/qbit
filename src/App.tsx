import { Option, Select } from '@inputs/choices';
import { ListItemSkin, ListSkin, OptionSkin, SelectSkin } from '@skins/defaults';
import { List, ListItem } from '@components/displays';
import BreadcrumbSkin from '@skins/defaults/breadcrumb/Breadcrumb.skin.default';
import BreadcrumbItemSkin from '@skins/defaults/breadcrumb/BreadcrumbItem.skin.default';
import Breadcrumb from '@components/displays/indicators/breadcrumbs/breadcrumb/Breadcrumb';
import BreadcrumbItem from '@components/displays/indicators/breadcrumbs/breadcrumb/BreadcrumbItem';

const App = () => {
  const SelectProperties: AlphaElements.SelectProperties = {
    name: 'select',
    value: { value: 'good', label: 'Good' },
    renderer: SelectSkin,
    optionRenderer: OptionSkin,
  };

  const SelectAction: AlphaElements.SelectActions = {
    triggerScrollEnd: () => console.log('Scrolled end'),
  };

  return (
    <div data-id="my-id">
      <Select properties={SelectProperties} actions={SelectAction}>
        <Option properties={{ value: { value: 'good', label: 'Good' } }} />
        <Option properties={{ value: { value: 'bad', label: 'Bad' } }} />
        <Option properties={{ value: { value: 'average', label: 'Average' } }} />
        <Option properties={{ value: { value: 'waste', label: 'Waste' } }} />
      </Select>

      {/* List component */}
      <List
        renderers={{ renderer: ListSkin, childRenderer: ListItemSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        className="list-decimal ml-6"
        onChange={(e) => {
          // @ts-expect-error temporary
          log('Current value', e.target.value);
        }}
      >
        <ListItem label="item 1" value="item 1" style={{ fontSize: '20px' }} />
        <ListItem label="item 2" value="item 2" />
        <ListItem label="item 3" value="item 3" />
        <ListItem label="item 4" value="item 4" />
      </List>

      <Breadcrumb
        renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        className="p-2"
      >
        <BreadcrumbItem name="Home" href="/" active />
        <BreadcrumbItem name="Category" onClick={() => console.log('sss')} />
        <BreadcrumbItem name="Subcategory" href="/category/subcategory" />
        <BreadcrumbItem name="Current Page" disabled />
      </Breadcrumb>
    </div>
  );
};

export default App;
