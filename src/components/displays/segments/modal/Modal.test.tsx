import { cleanup, render, screen } from '@testing-library/react';
import Modal from './Modal';
import ModalItem from './ModalItem';
import { ModalItemSkin, ModalSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<ModalProps> = {
  onClose(): void {},
  open: true,
  testId: 'modal-test-id',
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: ModalSkin, childRenderer: ModalItemSkin },
};

const renderModal = (props: com.qbit.ShellProps<ModalProps>) =>
  render(
    <Modal {...props}>
      <ModalItem>
        <div>Modal Content</div>
      </ModalItem>
      <ModalItem>
        <div>Modal Content</div>
      </ModalItem>
    </Modal>,
  );

describe('Test for modal elements', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should have modal elements', async () => {
    renderModal(DEFAULT_PROPERTIES);
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).toBeInTheDocument();
  });

  it('Should have not modal elements if isOpen is false', async () => {
    renderModal({ ...DEFAULT_PROPERTIES, open: false });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).not.toBeInTheDocument();
  });
});
