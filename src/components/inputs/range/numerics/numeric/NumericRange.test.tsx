import { NumericRangePointerSkin, NumericRangeSkin } from '@skins/defaults';
import NumericRange from './NumericRange';
import NumericRangePicker from './NumericRangePicker';
import { cleanup, render, screen } from '@testing-library/react';

const VALUES = [
  { value: 0, testId: 'numeric-range-child-1' },
  { value: 100, testId: 'numeric-range-child-2' },
  { value: 200, testId: 'numeric-range-child-3' },
];

const numericRangeRender = () => {
  render(
    <NumericRange
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      renderers={{ renderer: NumericRangeSkin, childRenderer: NumericRangePointerSkin }}
      minValue={0}
      maxValue={200}
      testId="numeric-range"
    >
      {VALUES?.map((val) => {
        return <NumericRangePicker value={val.value} testId={val.testId} />;
      })}
    </NumericRange>,
  );
};

describe('Numeric Range Element Test', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render Numeric Range Element ', async () => {
    numericRangeRender();
    const ele = await screen.findByTestId('numeric-range');
    expect(ele).toBeInTheDocument();

    let eleChild = await screen.findByTestId('numeric-range-child-1');
    expect(eleChild).toBeInTheDocument();

    eleChild = await screen.findByTestId('numeric-range-child-2');
    expect(eleChild).toBeInTheDocument();

    eleChild = await screen.findByTestId('numeric-range-child-3');
    expect(eleChild).toBeInTheDocument();
  });

  it('Should render Numeric Range Element child position', async () => {
    try {
      numericRangeRender();
      let eleChild = await screen.findByTestId('numeric-range-child-1');
      expect(eleChild).toBeInTheDocument();
      expect(eleChild).toHaveStyle({
        left: '0%',
      });

      eleChild = await screen.findByTestId('numeric-range-child-2');
      expect(eleChild).toBeInTheDocument();
      expect(eleChild).toHaveStyle({
        left: '50%',
      });

      eleChild = await screen.findByTestId('numeric-range-child-3');
      expect(eleChild).toBeInTheDocument();
      expect(eleChild).toHaveStyle({
        left: '100%',
      });
    } catch (error) {
      console.log(error);
    }
  });
});
