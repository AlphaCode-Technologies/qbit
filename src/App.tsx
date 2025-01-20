import { SelectSkin, TooltipSkin } from '@skins/defaults';
import { List, ListItem, Tooltip } from '@components/displays';
import { CheckboxItemSkin, CheckboxSkin, ListItemSkin, ListSkin } from '@skins/defaults';
import RadioOptionSkin from '@skins/defaults/radio/RadioOption.default.skin';
import RadioSkin from '@skins/defaults/radio/Radio.default.skin';
import Radio from '@components/inputs/choices/radios/radio/Radio';
import RadioOption from '@components/inputs/choices/radios/radio/RadioOption';
import SelectOptionSkin from '@skins/defaults/select/SelectOption.default.skin';
import SelectOption from '@components/inputs/choices/select/SelectOption';
import { Select } from '@components/inputs/choices';
import { Checkbox, CheckboxItem } from '@components/inputs/choices/checkboxes';
import { useState } from 'react';

const App = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
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
      <Tooltip
        renderers={{ renderer: TooltipSkin, childRenderer: ListItemSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        position={'bottom'}
        label={'Hello World'}
        className="bg-slate-300 p-1 rounded-lg shadow-lg"
      >
        <ListItem label="item 2" value="item 2" />
        <ListItem label="item 2" value="item 2" />
      </Tooltip>

      <Radio
        renderers={{ renderer: RadioSkin, childRenderer: RadioOptionSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        defaultValue={'option2'}
      >
        <RadioOption label="Option 1" name="example" value="option1" />
        <RadioOption label="Option 2" name="example" value="option2" />
        <RadioOption label="Option 3" name="example" value="option3" />
      </Radio>

      <Select
        renderers={{ renderer: SelectSkin, childRenderer: SelectOptionSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        defaultValue="Option 1"
      >
        <SelectOption label="Option 1" value="option1" testId="test1" />
        <SelectOption label="Option 2" value="option2" />
        <SelectOption label="Option 3" value="option3" disabled />
      </Select>

      <Checkbox
        renderers={{ renderer: CheckboxSkin, childRenderer: CheckboxItemSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        className="flex gap-2"
      >
        <CheckboxItem
          name="Option 1"
          value="option1"
          checked={selectedValues.includes('option1')}
          onChange={(isChecked) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option1'] : prev.filter((val) => val !== 'option1')))
          }
        />

        <CheckboxItem
          name="Option 2"
          value="option2"
          checked={selectedValues.includes('option2')}
          onChange={(isChecked) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option2'] : prev.filter((val) => val !== 'option2')))
          }
        />

        <CheckboxItem
          name="Option 3"
          value="option3"
          checked={selectedValues.includes('option3')}
          onChange={(isChecked) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option3'] : prev.filter((val) => val !== 'option3')))
          }
        />
      </Checkbox>
    </div>
  );
};

export default App;
