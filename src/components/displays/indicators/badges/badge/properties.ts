import { com } from 'src/types/common';

export type BadgeProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    testId?: string;
    onClose?: (id: string) => void;
    imageSrc?: string;
    id?: string;
    label?: string;
    count?: number;
  };
