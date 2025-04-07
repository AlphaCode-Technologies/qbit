import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EmptyState from './EmptyState';
import EmptyStateSkin from '@skins/defaults/empty-state/EmptyState.skin.default';
import { Button } from '@components/inputs';
import { ButtonSkin } from '@skins/defaults';

describe('EmptyState Component', () => {
  it('renders icon, title, message and actions properly', () => {
    render(
      <EmptyState
        renderers={{ renderer: EmptyStateSkin }}
        icon={<span data-testid="icon-test">🚫</span>}
        title="No data"
        message="Nothing to see here"
        actions={
          <>
            <Button value={'Retry'} onClick={() => {}} renderers={{ renderer: ButtonSkin }} />
            <Button value={'+ Add New'} onClick={() => {}} renderers={{ renderer: ButtonSkin }} />
          </>
        }
        testId="empty-state"
      />,
    );

    expect(screen.getByTestId('empty-state')).toBeInTheDocument();
    expect(screen.getByText('No data')).toBeInTheDocument();
    expect(screen.getByText('Nothing to see here')).toBeInTheDocument();
    expect(screen.getByTestId('icon-test')).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
    expect(screen.getByText('+ Add New')).toBeInTheDocument();
  });

  it('calls actions on button click', () => {
    const retryMock = vi.fn();
    const addNewMock = vi.fn();

    render(
      <EmptyState
        renderers={{ renderer: EmptyStateSkin }}
        title="No data"
        message="Nothing to see here"
        actions={
          <>
            <Button value={'Retry'} onClick={retryMock} renderers={{ renderer: ButtonSkin }} />
            <Button value={'+ Add New'} onClick={addNewMock} renderers={{ renderer: ButtonSkin }} />
          </>
        }
      />,
    );

    fireEvent.click(screen.getByText('Retry'));
    fireEvent.click(screen.getByText('+ Add New'));

    expect(retryMock).toHaveBeenCalledTimes(1);
    expect(addNewMock).toHaveBeenCalledTimes(1);
  });

  it('does not render icon if not provided', () => {
    render(
      <EmptyState renderers={{ renderer: EmptyStateSkin }} title="Missing Icon Test" message="This one has no icon" />,
    );

    expect(screen.queryByTestId('icon-test')).not.toBeInTheDocument();
    expect(screen.getByText('Missing Icon Test')).toBeInTheDocument();
  });
});
