import { com } from 'src/types/common';

export type RatingProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    rating: number;
    ratingRange: number;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    testId?: string;
    editable?: boolean;
    hoverRating?: number | null;
    handleMouseMove?: (event: React.MouseEvent, index: number) => void;
    handleMouseLeave?: () => void;
    handleClick?: (index: number, event: React.MouseEvent) => void;
    setRating?: (rating: number) => void;
  };
