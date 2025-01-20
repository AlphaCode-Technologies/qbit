type ProgressStepProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

type ProgressStepItemProps = ProgressStepProps &
  com.utils.Property<{
    label: string;
    active?: boolean;
    completed?: boolean;
  }>;
