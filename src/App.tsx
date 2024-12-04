import { DefaultSkin } from '@components/inputs/choices/radio/skins';
import { Radio, RadioGroup } from '@inputs/choices';

const App = () => {
  const groupProperties: AlphaElements.RadioGroupProperties = {
    name: 'radio-group',
    value: 'bad',
    Renderer: DefaultSkin,
    keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
  };
  const actions: AlphaElements.RadioGroupActions = {
    onChange: (val: any) => {
      console.log(val);
    },
  };

  return (
    <div data-id="my-id">
      <RadioGroup properties={groupProperties} actions={actions}>
        <Radio properties={{ value: 'good', label: 'Good', Renderer: DefaultSkin }} />
        <Radio properties={{ value: 'bad', label: 'Bad', disabled: true }} />
        <Radio properties={{ value: 'avg', label: 'Avg' }} />
      </RadioGroup>
    </div>
  );
};

export default App;
