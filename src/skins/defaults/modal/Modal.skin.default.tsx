import { ModalProps } from '@components/index';
import { com } from 'src/types/common';

const Modal: com.qbit.Skin<ModalProps> = (props) => {
  const { children } = props;

  return <div className="bg-white p-6 rounded-lg">{children}</div>;
};

export default Modal;
