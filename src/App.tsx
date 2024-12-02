import { Checkbox } from '@inputs/choices';
import { Switch } from '@inputs/choices/checkbox/skins';

const App = () => {
  return (
    <div data-id="my-id">
      <Checkbox />

      <Checkbox>
        <Switch />
      </Checkbox>
    </div>
  );
};

export default App;
