import Avatar from './Avatar';
import { AvatarSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Displays/Indicators/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: '',
    testId: '',
    renderers: { renderer: AvatarSkin },
    width: 48,
    height: 48,
  },
};

export const Default = {
  args: {
    value: 'QB',
    renderers: { renderer: AvatarSkin },
  },
};

export const JSXContent = {
  args: {
    value: (
      <div className="flex content-center justify-center flex-wrap h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
          <path
            d="M20.3334 22.5C20.3334 20.8718 20.3334 20.0578 20.1324 19.3953C19.68 17.9039 18.5128 16.7367 17.0214 16.2843C16.3589 16.0833 15.5448 16.0833 13.9167 16.0833H8.08336C6.4552 16.0833 5.64112 16.0833 4.97869 16.2843C3.48722 16.7367 2.32007 17.9039 1.86763 19.3953C1.66669 20.0578 1.66669 20.8718 1.66669 22.5M16.25 6.75C16.25 9.6495 13.8995 12 11 12C8.10053 12 5.75002 9.6495 5.75002 6.75C5.75002 3.85051 8.10053 1.5 11 1.5C13.8995 1.5 16.25 3.85051 16.25 6.75Z"
            stroke="#667085"
            strokeWidth="2.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    renderers: { renderer: AvatarSkin },
  },
};

export const CustomWidthAndHeight = {
  args: {
    width: 100,
    height: 100,
    value: (
      <div className="flex content-center justify-center flex-wrap h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
          <path
            d="M20.3334 22.5C20.3334 20.8718 20.3334 20.0578 20.1324 19.3953C19.68 17.9039 18.5128 16.7367 17.0214 16.2843C16.3589 16.0833 15.5448 16.0833 13.9167 16.0833H8.08336C6.4552 16.0833 5.64112 16.0833 4.97869 16.2843C3.48722 16.7367 2.32007 17.9039 1.86763 19.3953C1.66669 20.0578 1.66669 20.8718 1.66669 22.5M16.25 6.75C16.25 9.6495 13.8995 12 11 12C8.10053 12 5.75002 9.6495 5.75002 6.75C5.75002 3.85051 8.10053 1.5 11 1.5C13.8995 1.5 16.25 3.85051 16.25 6.75Z"
            stroke="#667085"
            strokeWidth="2.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    renderers: { renderer: AvatarSkin },
  },
};
