import { Option, Select } from '@inputs/choices';
// import { Shell } from '@components/containers';
import { DefaultAccordionSkin, OptionSkin, SelectSkin } from '@skins/defaults';
import { Accordion } from '@components/displays/menus';
import { useState } from 'react';
import ProgressStepGroup from '@components/displays/indicators/progress-step/ProgressStepGroup';
import ProgressStep from '@components/displays/indicators/progress-step/ProgressStep';
import ProgressStepSkin from '@skins/defaults/ProgressStep.default.skin';

// type CheckboxProperties = {
//   value?: boolean;
//   disabled?: boolean;
// };

// type CheckboxActions = com.evt.MouseEvents & com.evt.UiEvents;

// const CheckboxSkin: com.elem.Skin<CheckboxProperties, CheckboxActions> = ({ properties, actions, options }) => {
//   const { value } = properties;
//   const { onChange } = actions ?? {};
//   const { a11y = {} } = options ?? {};
//   return <input type="checkbox" defaultChecked={value} onChange={onChange} {...a11y} />;
// };

// const Checkbox: com.elem.Shell<CheckboxProperties, CheckboxActions> = ({ properties, actions, options }) => {
//   return <Shell<CheckboxProperties, CheckboxActions> properties={properties} actions={actions} options={options} />;
// };

const progressData = [
  { name: 'Fill form', active: false, completed: true, id: 'step-1', renderer: ProgressStepSkin },
  { name: 'Payment', active: true, completed: false, id: 'step-2', renderer: ProgressStepSkin },
  { name: 'Confirmation', active: false, completed: false, id: 'step-3', renderer: ProgressStepSkin },
  { name: 'disabled', active: false, completed: false, id: 'step-4', renderer: ProgressStepSkin, disabled: true },
];

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
      {/* <Checkbox
        properties={{ renderer: CheckboxSkin }}
        actions={{
          onChange: () => {
            console.log('check box skin with new ');
          },
        }}
      /> */}
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

      <div className="min-h-screen bg-gray-100 p-8">
        <ProgressStepGroup properties={progressData} actions={{ onClick: () => console.log('clicked') }}>
          {progressData.map((step, index) => (
            <ProgressStep key={step.id} properties={{ ...step, index, total: progressData.length }} />
          ))}
        </ProgressStepGroup>
      </div>
    </div>
  );
};

export default App;
