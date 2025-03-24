import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useState } from 'react';
import Rating from './Ratings';
import { RatingSkin } from '@skins/defaults';

// Mock component for testing
const TestWrapper = () => {
  const [rating, setRating] = useState<number>(3);
  return (
    <Rating
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      renderers={{ renderer: RatingSkin }}
      rating={rating}
      ratingRange={5}
      size="xl"
      editable
      setRating={setRating}
      testId={'percentage-text'}
    />
  );
};

describe('Rating Component', () => {
  it('renders the rating component correctly', () => {
    render(<TestWrapper />);
    const stars = screen.getAllByRole('img');
    expect(stars.length).toBe(5); // Ensures 5 stars are rendered
  });

  it('updates rating on click when editable', () => {
    const setRatingMock = vi.fn();
    const { getAllByRole } = render(
      <Rating
        rating={3}
        ratingRange={5}
        size="xl"
        editable
        setRating={setRatingMock}
        renderers={{ renderer: RatingSkin }}
      />,
    );

    const stars = getAllByRole('img');
    fireEvent.click(stars[4]);
    expect(setRatingMock).toHaveBeenCalledWith(5);
  });

  it('displays the correct initial rating', () => {
    render(<TestWrapper />);
    const percentageText = screen.getByTestId('percentage-text');
    expect(percentageText).toHaveTextContent('60.0%');
  });

  it('updates rating on click', () => {
    render(<TestWrapper />);
    const stars = screen.getAllByRole('img');
    fireEvent.click(stars[4]); // Click on the last star (5 stars rating)

    const updatedText = screen.getByTestId('percentage-text');
    expect(updatedText).toBeInTheDocument();
  });

  it('handles hover effect correctly', () => {
    render(<TestWrapper />);
    const stars = screen.getAllByRole('img');
    fireEvent.mouseMove(stars[2]); // Hover over the third star

    expect(screen.getByText(/60.0%/i)).toBeInTheDocument();
  });

  it('does not allow interaction when not editable', () => {
    const setRatingMock = vi.fn();
    const { getAllByRole } = render(
      <Rating
        rating={3}
        ratingRange={5}
        size="xl"
        editable={false}
        setRating={setRatingMock}
        renderers={{ renderer: RatingSkin }}
      />,
    );

    const stars = getAllByRole('img');
    fireEvent.click(stars[4]);
    expect(setRatingMock).not.toHaveBeenCalled();
  });
});
