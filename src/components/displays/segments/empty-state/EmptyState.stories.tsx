import { Meta, StoryObj } from '@storybook/react';
import EmptyState from './EmptyState';
import EmptyStateSkin from '@skins/defaults/empty-state/EmptyState.skin.default';
import { Button } from '@components/inputs';
import { ButtonSkin } from '@skins/defaults';

const meta: Meta<typeof EmptyState> = {
  title: 'Displays/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    renderers: { renderer: EmptyStateSkin },
    title: 'No Data Available',
    message: 'There is currently no data to display.',
  },
};

export const WithIcon: Story = {
  args: {
    renderers: { renderer: EmptyStateSkin },
    title: 'Nothing Here',
    message: 'Try adjusting your filters.',
    icon: (
      <span role="img" aria-label="icon">
        📭
      </span>
    ),
  },
};

export const WithActions: Story = {
  args: {
    renderers: { renderer: EmptyStateSkin },
    title: 'No Projects',
    message: 'You haven’t created any projects yet.',
    actions: (
      <>
        <Button value="Retry" onClick={() => alert('Retry')} renderers={{ renderer: ButtonSkin }} />
        <Button
          value="+ Add New"
          onClick={() => alert('+ Add New')}
          renderers={{ renderer: ButtonSkin }}
          className="bg-blue-700 text-white"
        />
      </>
    ),
  },
};

export const FullExample: Story = {
  args: {
    renderers: { renderer: EmptyStateSkin },
    icon: (
      <span role="img" aria-label="empty">
        🗂️
      </span>
    ),
    title: 'No Results',
    message: 'We couldn’t find what you were looking for.',
    actions: (
      <>
        <Button value="Reload" onClick={() => alert('Reload')} renderers={{ renderer: ButtonSkin }} />
        <Button value="Add New" onClick={() => alert('Add New')} renderers={{ renderer: ButtonSkin }} />
      </>
    ),
    testId: 'storybook-empty-state',
  },
};
