import { ListItemSkin, ListSkin, ToasterSkin } from '@skins/defaults';
import { List, ListItem } from '@components/displays';
import { Toaster } from '@components/displays/notfications';

const App = () => {
  return (
    <div data-id="my-id">
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
      <Toaster properties={{ open: true, position: 'top-center', renderer: ToasterSkin }} />
    </div>
  );
};

export default App;
