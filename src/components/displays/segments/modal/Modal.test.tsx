import { cleanup, render, screen } from '@testing-library/react';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import { ModalContentSkin, ModalFooterSkin, ModalHeaderSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: AlphaElements.ModalProperties = {
  isOpen: true,
  testId: 'modal-test-id',
};

const renderModal = ({ props }: com.elem.Shell<AlphaElements.ModalProperties, AlphaElements.ModalActions>) =>
  render(
    <Modal properties={props}>
      <ModalHeader properties={{ renderer: ModalHeaderSkin }} />
      <ModalContent properties={{ renderer: ModalContentSkin }} />
      <ModalFooter properties={{ renderer: ModalFooterSkin }} />
    </Modal>,
  );

describe('Test for modal elements', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should have modal elements', async () => {
    renderModal({ props: DEFAULT_PROPERTIES });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).toBeInTheDocument();
  });

  it('Should have not modal elements if isOpen is false', async () => {
    renderModal({ props: { ...DEFAULT_PROPERTIES, isOpen: false } });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).not.toBeInTheDocument();
  });
});
