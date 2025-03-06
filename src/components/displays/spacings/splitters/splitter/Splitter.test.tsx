import { SplitterItemSkin, SplitterSkin } from '@skins/defaults';
import { fireEvent, render, screen } from '@testing-library/react';
import Splitter from './Splitter';
import SplitterItem from './SplitterItem';
import { act } from 'react';
import { SplitterProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<SplitterProps> = {
  width: '200px',
  height: '400px',
  resizable: true,
  testId: 'parent-ele',
  keyExtractor: (_: string, i: number) => `${i}`,
  renderers: { renderer: SplitterSkin, childRenderer: SplitterItemSkin },
};

const DEFAULT_VALUES: SplitterProps[] = [
  {
    width: '200px',
    height: '100px',
    testId: 'child-ele-1',
  },
  {
    width: '200px',
    height: '100px',
    testId: 'child-ele-2',
  },
  {
    width: '200px',
    height: '100px',
    testId: 'child-ele-3',
  },
  {
    width: '200px',
    height: '100px',
    testId: 'child-ele-4',
  },
];

const DEFAULT_VALUES2: SplitterProps[] = [
  {
    width: '100px',
    height: '200px',
    testId: 'child-ele-1',
  },
  {
    width: '100px',
    height: '200px',
    testId: 'child-ele-2',
  },
  {
    width: '100px',
    height: '200px',
    testId: 'child-ele-3',
  },
  {
    width: '100px',
    height: '200px',
    testId: 'child-ele-4',
  },
];

const splitterRender = (props: com.qbit.ShellProps<SplitterProps>, values: SplitterProps[]) => {
  render(
    <Splitter
      width={props.width}
      height={props.height}
      keyExtractor={props.keyExtractor}
      renderers={props.renderers}
      resizable={props.resizable}
      testId={props.testId}
    >
      {values?.map((item: SplitterProps) => {
        return <SplitterItem width={item.width} height={item.height} testId={item.testId} />;
      })}
    </Splitter>,
  );
};

describe('Splitter Element Test', () => {
  it('Should render Splitter element', async () => {
    splitterRender({ ...DEFAULT_PROPERTIES, resizable: false }, DEFAULT_VALUES);
    const ele = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(ele).toBeInTheDocument();

    const ele1 = await screen.findByTestId(DEFAULT_VALUES[0].testId!);
    expect(ele1)?.toBeInTheDocument();

    const ele2 = await screen.findByTestId(DEFAULT_VALUES[1].testId!);
    expect(ele2)?.toBeInTheDocument();
  });

  it('Should render Splitter element with resizable', async () => {
    splitterRender(DEFAULT_PROPERTIES, DEFAULT_VALUES);
    const ele = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(ele).toBeInTheDocument();

    const ele1 = await screen.findByTestId(DEFAULT_VALUES[0].testId!);
    expect(ele1)?.toBeInTheDocument();

    const ele2 = await screen.findByTestId(DEFAULT_VALUES[1].testId!);
    expect(ele2)?.toBeInTheDocument();
  });

  it('Should render Splitter horizontal element', async () => {
    splitterRender({ ...DEFAULT_PROPERTIES, horizontal: true }, DEFAULT_VALUES2);
    const ele = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(ele).toBeInTheDocument();

    const ele1 = await screen.findByTestId(DEFAULT_VALUES[0].testId!);
    expect(ele1)?.toBeInTheDocument();

    const ele2 = await screen.findByTestId(DEFAULT_VALUES[1].testId!);
    expect(ele2)?.toBeInTheDocument();
  });

  it('Should render Splitter child in correct position', async () => {
    splitterRender(DEFAULT_PROPERTIES, DEFAULT_VALUES);

    const ele1 = await screen.findByTestId(DEFAULT_VALUES[0].testId!);
    expect(ele1).toHaveStyle({
      width: DEFAULT_VALUES[0].width,
      height: DEFAULT_VALUES[0].height,
    });

    const ele2 = await screen.findByTestId(DEFAULT_VALUES[1].testId!);
    expect(ele2).toHaveStyle({
      width: DEFAULT_VALUES[0].width,
      height: DEFAULT_VALUES[0].height,
    });
  });

  it('Should render Splitter resizing', async () => {
    splitterRender(DEFAULT_PROPERTIES, DEFAULT_VALUES);
    const ele = await screen.findByTestId(DEFAULT_VALUES[0].testId!);

    const splitterHandle = ele.children[0];
    // Simulate mouse down to start resizing
    await act(async () => {
      fireEvent.mouseDown(splitterHandle, { clientY: 200 });
    });

    // Simulate mouse move to resize
    await act(async () => {
      fireEvent.mouseMove(window, { clientY: 250 });
    });

    // Simulate mouse up to stop resizing
    await act(async () => {
      fireEvent.mouseUp(window);
    });

    // TODO Discuss with @dulan
  });
});
