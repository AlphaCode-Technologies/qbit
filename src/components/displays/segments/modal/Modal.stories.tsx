import { ModalContentSkin, ModalFooterSkin, ModalHeaderSkin } from '@skins/defaults';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

export default {
  title: 'Alpha Elements/Displays/Segments/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      isOpen: true,
    },
  },
};

export const Default = {
  args: {
    isOpen: true,
  },
  children: [
    <ModalHeader renderer={{ renderer: ModalHeaderSkin }} />,
    <ModalContent renderer={{ renderer: ModalContentSkin }} />,
    <ModalFooter renderer={{ renderer: ModalFooterSkin }} />,
  ],
};
