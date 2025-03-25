import { useState } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Avatar from './Avatar';
import { AvatarSkin } from '@skins/defaults';
import { AvatarProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<AvatarProps> = {
  value: 'AE',
  renderers: {
    renderer: AvatarSkin,
  },
  onClick: () => {
    console.log('Avatar Clicked!');
  },
};

const renderAvatar = (props: com.qbit.ShellProps<AvatarProps>) => {
  render(<Avatar {...props} />);
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
  const avatarProperties = {
    value,
    testId,
    disabled,
    renderers: {
      renderer: AvatarSkin,
    },
  };

  return <Avatar {...avatarProperties} onClick={() => setValue(changedValue)} />;
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

  it('Should render avatar with default width and height', async () => {
    const newAvatarProperties = { ...DEFAULT_PROPERTIES, testId: 'avatar' };
    renderAvatar(newAvatarProperties);
    const avatar = await screen.findByTestId('avatar');

    expect(avatar).toHaveAttribute('width', '48');
    expect(avatar).toHaveAttribute('height', '48');
  });

  it('Should render avatar with custom width and height', async () => {
    const newAvatarProperties = { ...DEFAULT_PROPERTIES, width: 100, height: 100, testId: 'avatar' };
    renderAvatar(newAvatarProperties);
    const avatar = await screen.findByTestId('avatar');

    expect(avatar).toHaveAttribute('width', '100');
    expect(avatar).toHaveAttribute('height', '100');
  });

  // TODO: Need to check this after adding disabled functionality
  // it('Should not trigger onClick when the avatar is disabled', async () => {
  //   render(<ChangeAvatarValue changedValue="AC" testId="avatar" disabled={true} />);
  //   const avatar = await screen.findByTestId('avatar');
  //   fireEvent.click(avatar);
  //
  //   const textWithinAvatar = within(avatar).getByText('AE');
  //   expect(textWithinAvatar).toBeInTheDocument();
  // });
});
