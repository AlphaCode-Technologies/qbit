import { TableProps } from '@components/tabular/table/basic/properties';
import { com } from 'src/types/common';

const TableSkin: com.qbit.Skin<TableProps> = (props: com.qbit.SkinProps<TableProps>) => {
  const { children } = props;
  return <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">{children}</table>;
};

export default TableSkin;
