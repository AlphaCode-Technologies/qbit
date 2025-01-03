import { render, screen } from '@testing-library/react';
import { CardContentSkin, CardFooterSkin, CardHeaderSkin } from '@skins/defaults';
import { Card, CardContent, CardFooter, CardHeader } from '@displays/segments';

const DEFAULT_PROPERTIES = {
  Renderer: CardContentSkin,
  testId: 'card',
};

const renderCard = ({ props }: com.elem.Shell<AlphaElements.CardProperties, any>) =>
  render(
    <Card properties={props}>
      <CardHeader properties={{ renderer: CardHeaderSkin }} />
      <CardContent properties={{ renderer: CardContentSkin }} />
      <CardFooter properties={{ renderer: CardFooterSkin }} />
    </Card>,
  );

describe('Card Component Test', () => {
  it('Should render the card component', async () => {
    renderCard({ props: DEFAULT_PROPERTIES });
    const card = await screen.findByTestId(DEFAULT_PROPERTIES.testId);
    expect(card).toBeInTheDocument();
  });
});
