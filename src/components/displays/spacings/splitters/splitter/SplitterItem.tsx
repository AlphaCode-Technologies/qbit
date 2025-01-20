import { BaseComponent } from '@components/containers';
import { useBindSkin } from './Splitter.hook';

const SplitterItem: com.qbit.Shell<SplitterProps> = (props) => {
  const { resizable, horizontal, style, ref, testId, handleMouseDown } = useBindSkin(props);

  return (
    <div style={style} className={`relative`} ref={ref} data-testid={testId}>
      {resizable && (
        <div
          style={horizontal ? { width: '2px' } : { height: '2px' }}
          className={`absolute bg-transparent ${horizontal ? 'cursor-col-resize top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 h-full' : 'cursor-row-resize bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'} `}
          onMouseDown={handleMouseDown}
        />
      )}
      <BaseComponent {...props} />
    </div>
  );
};

export default SplitterItem;
