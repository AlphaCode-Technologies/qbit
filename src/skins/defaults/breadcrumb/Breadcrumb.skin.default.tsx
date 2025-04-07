import { BreadcrumbProps } from '@components/index';
import { com } from 'src/types/common';

const BreadcrumbSkin: com.qbit.Skin<BreadcrumbProps> = (props: com.qbit.SkinProps<BreadcrumbProps>) => {
  const { children, keyExtractor, ...rest } = props;

  return (
    <nav aria-label="breadcrumb" {...rest}>
      <ol className="flex gap-2">{children}</ol>
    </nav>
  );
};

export default BreadcrumbSkin;
