import { TableItemProps } from '@components/tabular/table/basic/properties';
import { com } from 'src/types/common';

const TableItemSkin: com.qbit.Skin<TableItemProps> = (props) => {
  const { data, testId, heading = false } = props;

  if (heading) {
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
  }

  return (
    <tr data-testid={testId} className="hover:bg-gray-100 transition">
      {Object.values(data).map((value: any, index) => (
        <td key={index} className="px-4 py-2 border border-gray-300">
          {value}
        </td>
      ))}
    </tr>
  );
};

export default TableItemSkin;
