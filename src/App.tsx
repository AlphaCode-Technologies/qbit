import { Splitter, SplitterItem } from '@components/displays/spacings';
import { SplitterItemSkin, SplitterSkin } from '@skins/defaults';

const App = () => {
  return (
    <div data-id="my-id">
      <Splitter
        width={'200px'}
        height={'400px'}
        keyExtractor={(_: string, i: number) => `${i}`}
        renderers={{ renderer: SplitterSkin, childRenderer: SplitterItemSkin }}
        resizable
      >
        <SplitterItem width={'200px'} height={'100px'} />
        <SplitterItem width={'200px'} height={'100px'} />
        <SplitterItem width={'200px'} height={'100px'} />
        <SplitterItem width={'200px'} height={'100px'} />
      </Splitter>
    </div>
  );
};

export default App;
