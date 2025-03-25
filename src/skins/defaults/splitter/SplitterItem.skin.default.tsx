import { SplitterProps } from '@components/displays';
import { com } from 'src/types/common';

const SplitterItemSkin: com.qbit.Skin<SplitterProps> = (props) => {
  const { children, onChange, ...rest } = props;
  return (
    <div {...rest} className="border-2 border-black w-full h-full">
      {children}
    </div>
  );
};

export default SplitterItemSkin;
