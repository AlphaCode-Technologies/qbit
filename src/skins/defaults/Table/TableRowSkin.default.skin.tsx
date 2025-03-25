import { TableItemProps } from '@components/tabular/table/basic/properties';
import { com } from 'src/types/common';

const TableRowSkin: com.qbit.Skin<TableItemProps> = (props) => {
  const { data, testId } = props;

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

export default TableRowSkin;
