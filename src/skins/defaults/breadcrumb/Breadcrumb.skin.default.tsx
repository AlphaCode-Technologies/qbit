const BreadcrumbSkin: com.qbit.Skin<BreadcrumbProps> = (props: com.qbit.SkinProps<BreadcrumbProps>) => {
  const { children } = props;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex gap-2">{children}</ol>
    </nav>
  );
};

export default BreadcrumbSkin;
