import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Tooltip from './Tooltip';
import { ListItemSkin } from '@skins/defaults';
import { TooltipSkin } from '@skins/defaults/tooltip';
import { TooltipProps } from './properties';

//set all values for properties for passing them as default
const DEFAULT_PROPERTIES: TooltipProps = {
  position: 'top',
  label: 'Test 1',
  delay: 100,
  duration: 10000,
  testId: 'tooltip-test',
  className: 'bg-slate-300 p-1 rounded-lg shadow-lg',
};

// rendering function
const renderTooltip = (props: TooltipProps) => {
  return render(
    <Tooltip
      renderers={{ renderer: TooltipSkin, childRenderer: ListItemSkin }}
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      position={props.position}
      label={props.position}
      className={props.className}
      delay={props.delay}
      duration={props.duration}
      testId={props.testId}
    >
      <div data-testid="child-1-test-id">Tooltip test</div>
      <div>Tooltip test</div>
    </Tooltip>,
  );
};

describe('Tooltip Component Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render a base children', async () => {
    renderTooltip(DEFAULT_PROPERTIES);
    const ele = screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(ele).toBeInTheDocument();
  });

  it('Should render a tooltip', async () => {
    renderTooltip(DEFAULT_PROPERTIES);
    const ele = screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    fireEvent.mouseOver(ele!);
    await new Promise((r) => setTimeout(r, DEFAULT_PROPERTIES.delay! + 10));
    const tooltipEle = screen.queryByTestId('child-1-test-id');
    expect(tooltipEle).toBeInTheDocument();
  });
});
