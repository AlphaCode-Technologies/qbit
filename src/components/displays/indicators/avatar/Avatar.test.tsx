import { fireEvent, render, screen, within } from '@testing-library/react';
import { Avatar } from '@components/displays/indicators';
import { AvatarSkin } from '@skins/defaults';
import { useState } from 'react';

const DEFAULT_PROPERTIES: AlphaElements.AvatarProperties = {
  value: 'AE',
  Renderer: AvatarSkin,
};

const DEFAULT_ACTIONS: AlphaElements.AvatarActions = {
  onClick: () => {
    console.log('Avatar Clicked!');
  },
};

const renderAvatar = (
  properties: AlphaElements.AvatarProperties = DEFAULT_PROPERTIES,
  actions: AlphaElements.AvatarActions = DEFAULT_ACTIONS,
) => {
  render(<Avatar properties={properties} actions={actions} />);
};

const ChangeAvatarValue = ({
  defaultValue = 'AE',
  changedValue,
  testId,
  disabled,
}: {
  defaultValue?: string;
  changedValue: string;
  testId?: string;
  disabled?: boolean;
}) => {
  const [value, setValue] = useState(defaultValue);
  const avatarProperties = { value, testId, disabled, Renderer: AvatarSkin };
  const avatarActions = { onClick: () => setValue(changedValue) };

  return <Avatar properties={avatarProperties} actions={avatarActions} />;
};

describe('Avatar Element Test', () => {
  it('Should render avatar element', async () => {
    const newAvatarProperties = { ...DEFAULT_PROPERTIES, testId: 'avatar' };
    renderAvatar(newAvatarProperties);
    const avatar = await screen.findByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });

  it('Should have "AC" text in avatar element', async () => {
    const newAvatarProperties = { ...DEFAULT_PROPERTIES, value: 'AC', testId: 'avatar' };
    renderAvatar(newAvatarProperties);
    const avatar = await screen.findByTestId('avatar');
    expect(avatar).toBeInTheDocument();

    const textWithinAvatar = within(avatar).getByText('AC');
    expect(textWithinAvatar).toBeInTheDocument();
  });

  it('Should trigger onClick when the avatar is clicked', async () => {
    render(<ChangeAvatarValue changedValue="AC" testId="avatar" />);
    const avatar = await screen.findByTestId('avatar');
    fireEvent.click(avatar);

    const textWithinAvatar = within(avatar).getByText('AC');
    expect(textWithinAvatar).toBeInTheDocument();
  });

  it('Should not trigger onClick when the avatar is disabled', async () => {
    render(<ChangeAvatarValue changedValue="AC" testId="avatar" disabled={true} />);
    const avatar = await screen.findByTestId('avatar');
    fireEvent.click(avatar);

    const textWithinAvatar = within(avatar).getByText('AE');
    expect(textWithinAvatar).toBeInTheDocument();
  });
});
