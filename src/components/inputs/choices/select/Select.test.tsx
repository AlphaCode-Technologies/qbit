import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';
import Option from './Option';
import { OptionSkin, SelectSkin } from '@skins/defaults';

const TestSkin: com.elem.Skin<AlphaElements.SelectProperties, AlphaElements.SelectActions> = ({
  properties,
  actions,
}) => {
  const { label, value, tabIndex } = properties;
  const { onChange } = actions ?? {};
  return (
    <button
      className={`bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4`}
      onClick={() => onChange?.(value)}
      tabIndex={tabIndex}
    >
      {label}
    </button>
  );
};

const DEFAULT_PROPERTIES: AlphaElements.SelectProperties = {
  name: 'select-element',
  value: '',
  renderer: SelectSkin,
  optionRenderer: OptionSkin,
  testId: 'select-test-id',
};

const DEFAULT_ACTIONS: AlphaElements.SelectActions = {
  onChange: (val: any) => {
    console.log(val);
  },
};

const DEFAULT_DATA: AlphaElements.SelectOptionProps[] = [
  { value: { value: 'good', label: 'Good' }, testId: 'good_0' },
  { value: { value: 'bad', label: 'Bad' }, testId: 'bad_1' },
  { value: { value: 'avg', label: 'Avg' }, testId: 'avg_2' },
];

type SelectData = {
  props: AlphaElements.SelectProperties;
  actions: AlphaElements.SelectActions;
  data: AlphaElements.SelectOptionProps[];
};

const renderSelect = ({ props, actions, data }: SelectData) =>
  render(
    <Select properties={props} actions={actions}>
      {data?.map((d: AlphaElements.SelectOptionProps) => {
        return <Option properties={d} />;
      })}
    </Select>,
  );

describe('Test for select elements', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should have render element', async () => {
    renderSelect({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(selectEle).not.toBeNull();
    const optionEle = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    expect(optionEle).toBeNull();
  });

  it('Should have render elements for on click', async () => {
    renderSelect({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    await fireEvent.click(selectEle!);
    const optionEle = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    expect(optionEle).not.toBeNull();
  });

  it('Should have hide elements for on click on option', async () => {
    renderSelect({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    await fireEvent.click(selectEle!);
    const optionEle = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    await fireEvent.click(optionEle!);
    const optionEle2 = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    expect(optionEle2).toBeNull();
  });

  it('Should have hide elements for on outside click', async () => {
    renderSelect({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    await fireEvent.click(selectEle!);
    const optionEle = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    expect(optionEle).not.toBeNull();
    await fireEvent.click(document.body);
    const optionEle2 = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    expect(optionEle2).toBeNull();
  });

  it('Should have select value for on click on option', async () => {
    renderSelect({ props: DEFAULT_PROPERTIES, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    await fireEvent.click(selectEle!);
    const optionEle = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    await fireEvent.click(optionEle!);
    const selectEle2 = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    const optionText = selectEle2?.textContent?.trim();
    expect(optionText).toContain(DEFAULT_DATA[0].value?.label);
  });

  it('Should have render with child skin', async () => {
    const data: AlphaElements.SelectOptionProps[] = [
      { value: { value: 'good', label: 'Good' }, testId: 'good_0', renderer: TestSkin },
      { value: { value: 'bad', label: 'Bad' }, testId: 'bad_1', renderer: TestSkin },
      { value: { value: 'avg', label: 'Avg' }, testId: 'avg_2', renderer: TestSkin },
    ];
    renderSelect({
      props: {
        ...DEFAULT_PROPERTIES,
        keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
      },
      actions: DEFAULT_ACTIONS,
      data: data,
    });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    await fireEvent.click(selectEle!);
    const element = screen.getAllByRole('button');
    expect(element).toHaveLength(data.length);
  });

  it('Should have render with child disabled', async () => {
    const data: AlphaElements.SelectOptionProps[] = [
      { value: { value: 'good', label: 'Good' }, testId: 'good_0', disabled: true },
      { value: { value: 'bad', label: 'Bad' }, testId: 'bad_1' },
      { value: { value: 'avg', label: 'Avg' }, testId: 'avg_2' },
    ];
    renderSelect({
      props: {
        ...DEFAULT_PROPERTIES,
        keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
      },
      actions: DEFAULT_ACTIONS,
      data: data,
    });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    await fireEvent.click(selectEle!);
    const optionEle = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    await fireEvent.click(optionEle!);
    const optionEle2 = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    expect(optionEle2).not.toBeNull();
  });

  it('Should have render with select', async () => {
    renderSelect({ props: { ...DEFAULT_PROPERTIES, disabled: true }, actions: DEFAULT_ACTIONS, data: DEFAULT_DATA });
    const selectEle = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    await fireEvent.click(selectEle!);
    const optionEle = await screen.queryByTestId(DEFAULT_DATA[0].testId!);
    expect(optionEle).toBeNull();
  });
});
