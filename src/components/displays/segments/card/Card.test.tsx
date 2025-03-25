import { render, screen } from '@testing-library/react';
import { CardItemSkin, CardSkin } from '@skins/defaults';
import Card from './Card';
import CardItem from './CardItem';
import { CardProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<CardProps> = {
  testId: 'card',
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: CardSkin, childRenderer: CardItemSkin },
};

const renderCard = (props: com.qbit.ShellProps<CardProps>) =>
  render(
    <Card {...props}>
      <CardItem>Card Content</CardItem>
      <CardItem>Card Content</CardItem>
    </Card>,
  );

describe('Card Component Test', () => {
  it('Should render the card component', async () => {
    renderCard(DEFAULT_PROPERTIES);
    const card = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(card).toBeInTheDocument();
  });
});
