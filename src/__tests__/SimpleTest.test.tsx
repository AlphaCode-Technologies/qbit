import { render } from '@testing-library/react';
import Test from '@components/simple-tests/SimpleTest';

describe('Default test', () => {
  it('Should test positive ', () => {
    expect(1 + 2).toBe(3);
  });

  it('Should render correctly', () => {
    const { container } = render(<Test />);

    expect(container).toHaveTextContent('Simple test');
  });
});
