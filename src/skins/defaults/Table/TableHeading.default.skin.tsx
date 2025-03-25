import { TableItemProps } from '@components/tabular/table/basic/properties';
import { com } from 'src/types/common';

const TableHeadingSkin: com.qbit.Skin<TableItemProps> = (props) => {
  const { data, testId } = props;

  return (
    <thead data-testid={testId} className="bg-gray-200 text-gray-700 uppercase text-sm">
      <tr>
        {data.map((key: any, index: any) => (
          <th key={index} className="px-4 py-2 border border-gray-300 text-left">
            {key}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadingSkin;
