import { StoryFn } from '@storybook/react';
import Modal from './Modal';
import ModalItem from './ModalItem';
import { ModalSkin, ModalItemSkin } from '@skins/defaults';
import { useState } from 'react';

export default {
  title: 'Qbit design/Displays/Segments/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `<Modal
  keyExtractor={() => {}}
  onClose={() => {}}
  renderers={{
    childRenderer: () => {},
    renderer: () => {},
  }}
>
  <ModalItem></ModalItem>
</Modal>`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    open: false,
    renderers: { renderer: ModalSkin, childRenderer: ModalItemSkin },
  },
};

const Template: StoryFn = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <div>
      <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalItem>
          <p>Modal Content 1</p>
        </ModalItem>
        <ModalItem>
          <p>Modal Content 2</p>
        </ModalItem>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};
