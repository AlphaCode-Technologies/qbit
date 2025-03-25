import { useState } from 'react';
import { RatingProps } from './properties';
import { com } from 'src/types/common';

export const useBindSkin = (props: com.qbit.ShellProps<RatingProps>) => {
  const { rating, editable, setRating } = props;
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number>(rating);

  const handleMouseMove = (event: React.MouseEvent, index: number) => {
    if (!editable) return;
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const newHoverRating = x < width / 2 ? index + 0.5 : index + 1;
    setHoverRating(newHoverRating);
  };

  const handleMouseLeave = () => {
    if (!editable) return;
    setHoverRating(null);
  };

  const handleClick = (index: number, event: React.MouseEvent) => {
    if (!editable) return;
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const newRating = x < width / 2 ? index + 0.5 : index + 1;
    setSelectedRating(newRating);
    if (setRating) {
      setRating(newRating);
    }
  };

  return {
    hoverRating,
    selectedRating,
    handleMouseMove,
    handleMouseLeave,
    handleClick,
  };
};
