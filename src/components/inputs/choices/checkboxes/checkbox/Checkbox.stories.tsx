import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckboxItem from './CheckboxItem';
import { CheckboxItemSkin, CheckboxSkin } from '@skins/defaults';
import Checkbox from './Checkbox';

// Meta configuration
export default {
  title: 'Qbit design/Inputs/Choices/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta;

// Checkbox Story
export const CheckboxStories: StoryFn = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [preSelectedValues] = useState<string[]>(['option2']);

  return (
    <div className="flex flex-col gap-8">
      {/* Default Checkbox */}
      <section>
        <h3>Default Checkbox</h3>
        <Checkbox
          renderers={{ renderer: CheckboxSkin, childRenderer: CheckboxItemSkin }}
          keyExtractor={(value: string, i: number) => `${value}-${i}`}
          className="flex gap-2"
        >
          <CheckboxItem
            value="option1"
            checked={selectedValues.includes('option1')}
            onChange={(isChecked) =>
              setSelectedValues((prev) => (isChecked ? [...prev, 'option1'] : prev.filter((val) => val !== 'option1')))
            }
          />
          <CheckboxItem
            value="option2"
            checked={selectedValues.includes('option2')}
            onChange={(isChecked) =>
              setSelectedValues((prev) => (isChecked ? [...prev, 'option2'] : prev.filter((val) => val !== 'option2')))
            }
          />
          <CheckboxItem
            value="option3"
            checked={selectedValues.includes('option3')}
            onChange={(isChecked) =>
              setSelectedValues((prev) => (isChecked ? [...prev, 'option3'] : prev.filter((val) => val !== 'option3')))
            }
          />
        </Checkbox>
      </section>

      {/* Pre-Selected Checkbox */}
      <section>
        <h3>Pre-Selected Checkbox</h3>
        <Checkbox
          renderers={{ renderer: CheckboxSkin, childRenderer: CheckboxItemSkin }}
          keyExtractor={(value: string, i: number) => `${value}-${i}`}
          className="flex gap-2"
        >
          <CheckboxItem value="option1" checked={preSelectedValues.includes('option1')} onChange={() => {}} />
          <CheckboxItem value="option2" checked={preSelectedValues.includes('option2')} onChange={() => {}} />
          <CheckboxItem value="option3" checked={preSelectedValues.includes('option3')} onChange={() => {}} />
        </Checkbox>
      </section>

      {/* Disabled Checkbox */}
      <section>
        <h3>Disabled Checkbox</h3>
        <Checkbox
          renderers={{ renderer: CheckboxSkin, childRenderer: CheckboxItemSkin }}
          keyExtractor={(value: string, i: number) => `${value}-${i}`}
          className="flex gap-2"
        >
          <CheckboxItem value="option1" disabled onChange={() => {}} checked={false} />
          <CheckboxItem value="option2" disabled onChange={() => {}} checked={false} />
          <CheckboxItem value="option3" disabled onChange={() => {}} checked={false} />
        </Checkbox>
      </section>
    </div>
  );
};
