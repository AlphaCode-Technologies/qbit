import { com } from 'src/types/common';

export type ProgressStepProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

export type ProgressStepItemProps = ProgressStepProps &
  com.utils.Property<{
    label: string;
    active?: boolean;
    completed?: boolean;
  }>;
