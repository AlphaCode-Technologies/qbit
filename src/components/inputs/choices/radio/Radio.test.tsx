import { fireEvent, render, screen } from '@testing-library/react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';
import { ButtonSkin } from './skins';

const groupProperties: AlphaElements.RadioGroupProperties = {
  name: 'radio-group',
  value: 'bad',
  keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
};

const groupActions: AlphaElements.RadioGroupActions = {
  onChange: (val: any) => {
    console.log(val);
  },
};

const defaultData: AlphaElements.RadioProperties[] = [
  { value: 'good', label: 'Good', testId: 'good_0' },
  { value: 'bad', label: 'Bad', testId: 'bad_1' },
  { value: 'avg', label: 'Avg', testId: 'avg_2' },
];

const radioRender = (
  properties: AlphaElements.RadioGroupProperties = groupProperties,
  actions: AlphaElements.RadioGroupActions = groupActions,
  data: AlphaElements.RadioProperties[] = defaultData,
) =>
  render(
    <RadioGroup properties={properties} actions={actions}>
      {data?.map((d: AlphaElements.RadioProperties) => {
        return <Radio properties={d} />;
      })}
    </RadioGroup>,
  );

describe('Radio Element Test', () => {
  it('Should render hidden radio elements ', async () => {
    radioRender();
    const radioInputs = screen.getAllByRole('radio');
    expect(radioInputs).toHaveLength(3);
    radioInputs.forEach((input) => {
      expect(input).toHaveClass('hidden');
      expect(input).toBeEnabled();
    });
    const goodSkin = await screen.findByTestId('good_0');
    expect(goodSkin).toBeInTheDocument();
    const badSkin = await screen.findByTestId('bad_1');
    expect(badSkin).toBeInTheDocument();
    const avgSkin = await screen.findByTestId('avg_2');
    expect(avgSkin).toBeInTheDocument();
  });

  it('Should selected default value', () => {
    radioRender();
    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach((input) => {
      if (input.getAttribute('value') === groupProperties.value) expect(input).toBeChecked();
      else expect(input).not.toBeChecked();
    });
  });

  it('Should render radio group skin', () => {
    const newGroupProperties = { ...groupProperties, Renderer: ButtonSkin };
    radioRender(newGroupProperties);
    const elements = screen.getAllByRole('button');
    expect(elements).toHaveLength(3);
  });

  it('Should render radio group disabled', () => {
    const newGroupProperties = { ...groupProperties, disabled: true };
    radioRender(newGroupProperties);
    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it('Should render radio disabled', () => {
    const data: AlphaElements.RadioProperties[] = [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2', disabled: true },
    ];
    radioRender(undefined, undefined, data);
    const radioInputs = screen.getAllByRole('radio');
    radioInputs.forEach((input) => {
      const ele = data.find((x) => x.value === input.getAttribute('value'));
      if (ele?.disabled) expect(input).toBeDisabled();
      else expect(input).toBeEnabled();
    });
  });

  it('Should select the click element', async () => {
    radioRender();
    const radioInputSkin = await screen.findByTestId('good_0');
    expect(radioInputSkin).toBeInTheDocument();
    await fireEvent.click(radioInputSkin);
    const radioInputs = screen.getAllByRole('radio');
    const radioInput = radioInputs.find((input) => input.getAttribute('value') === 'good');
    expect(radioInput).toBeChecked();
  });

  it('Should not select the click disable element', async () => {
    const data: AlphaElements.RadioProperties[] = [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2', disabled: true },
    ];
    radioRender(undefined, undefined, data);
    const radioInputSkin = await screen.findByTestId('avg_2');
    expect(radioInputSkin).toBeInTheDocument();
    await fireEvent.click(radioInputSkin);
    const radioInputs = screen.getAllByRole('radio');
    const radioInput = radioInputs.find((input) => input.getAttribute('value') === 'avg');
    expect(radioInput).not.toBeChecked();
  });
});
