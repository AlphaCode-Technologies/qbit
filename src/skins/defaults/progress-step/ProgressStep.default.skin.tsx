const ProgressStepSkin: com.qbit.Skin<ProgressStepProps> = (props: com.qbit.SkinProps<ProgressStepProps>) => {
  const { children } = props;

  return <div className="flex gap-4 items-center">{children}</div>;
};

export default ProgressStepSkin;
