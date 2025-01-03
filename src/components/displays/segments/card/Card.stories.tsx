import { CardContentSkin, CardFooterSkin, CardHeaderSkin } from '@skins/defaults';
import Card from './Card';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

export default {
  title: 'Alpha Elements/Displays/Segments/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {},
  },
};

export const Default = {
  args: {},
  children: [
    <CardHeader renderer={{ renderer: CardHeaderSkin }} />,
    <CardContent renderer={{ renderer: CardContentSkin }} />,
    <CardFooter renderer={{ renderer: CardFooterSkin }} />,
  ],
};
