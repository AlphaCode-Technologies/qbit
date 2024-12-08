import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';
import { RadioSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: AlphaElements.RadioGroupProperties = {
  name: 'radio-group',
  value: 'bad',
  Renderer: RadioSkin,
  keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
};

const DEFAULT_ACTIONS: AlphaElements.RadioGroupActions = {
  onChange: (val: any) => {
    console.log(val);
  },
};

const DEFAULT_DATA: AlphaElements.RadioProperties[] = [
  { value: 'good', label: 'Good', testId: 'good_0' },
  { value: 'bad', label: 'Bad', testId: 'bad_1' },
  { value: 'avg', label: 'Avg', testId: 'avg_2' },
];

type RadioData = {
  props: AlphaElements.RadioGroupProperties;
  actions: AlphaElements.RadioGroupActions;
  data: AlphaElements.RadioProperties[];
};

const TestSkin = ({ properties, actions }: AlphaElements.RadioProps) => {
  const { label, value, selected, tabIndex } = properties;
  const { onChange } = actions ?? {};
  return (
    <button
      className={`bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 ${selected && 'border border-teal-900'}`}
      onClick={() => onChange?.(value)}
      tabIndex={tabIndex}
    >
      {label}
    </button>
  );
};

const renderRadio = ({ props, actions, data }: RadioData) =>
  render(
    <RadioGroup properties={props} actions={actions}>
      {data?.map((d: AlphaElements.RadioProperties) => {
        return <Radio properties={d} />;
      })}
    </RadioGroup>,
  );

describe('Test for radio elements', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should have hidden native HTML radio elements ', async () => {
    renderRadio({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const radioInputs = screen.getAllByRole('radio');
    expect(radioInputs).toHaveLength(DEFAULT_DATA.length);
    radioInputs.forEach((input, i) => {
      expect(input).toHaveClass('hidden');
      expect(input).toBeEnabled();
      waitFor(() => {
        const skin = screen.findByTestId(DEFAULT_DATA[i].testId!);
        expect(skin).toBeInTheDocument();
      });
    });
  });

  it('Should have a default value selected', () => {
    renderRadio({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach((input) => {
      if (input.getAttribute('value') === DEFAULT_PROPERTIES.value) expect(input).toBeChecked();
      else expect(input).not.toBeChecked();
    });
  });

  it('Should select the click element', async () => {
    renderRadio({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const radioInputSkin = await screen.findByTestId(DEFAULT_DATA[0].testId!);
    expect(radioInputSkin).toBeInTheDocument();
    await fireEvent.click(radioInputSkin);
    const radioInputs = screen.getAllByRole('radio');
    const radioInput = radioInputs.find((input) => input.getAttribute('value') === DEFAULT_DATA[0].value);
    expect(radioInput).toBeChecked();
  });

  it('Should render radio group skin', () => {
    renderRadio({
      props: { ...DEFAULT_PROPERTIES, Renderer: TestSkin },
      actions: DEFAULT_ACTIONS,
      data: DEFAULT_DATA,
    });
    const elements = screen.getAllByRole('button');
    expect(elements).toHaveLength(DEFAULT_DATA.length);
  });

  it('Should have the entire radio group disabled', () => {
    renderRadio({ props: { ...DEFAULT_PROPERTIES, disabled: true }, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it('Should render radio disabled', () => {
    const data = [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2', disabled: true },
    ];

    renderRadio({
      props: DEFAULT_PROPERTIES,
      actions: DEFAULT_ACTIONS,
      data,
    });

    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach((input) => {
      const ele = data?.find((x) => x.value === input.getAttribute('value'));
      if (ele?.disabled) expect(input).toBeDisabled();
      else expect(input).toBeEnabled();
    });
  });

  it('Should not be able to click the disabled element', () => {
    const data: AlphaElements.RadioProperties[] = [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2', disabled: true },
    ];
    renderRadio({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: data });
    waitFor(() => {
      const radioInputSkin = screen.findByTestId('avg_2');
      expect(radioInputSkin).toBeInTheDocument();
      fireEvent.click(radioInputSkin as unknown as HTMLElement);
      const radioInputs = screen.getAllByRole('radio');
      const radioInput = radioInputs.find((input) => input.getAttribute('value') === 'avg');
      expect(radioInput).not.toBeChecked();
    });
  });
});
