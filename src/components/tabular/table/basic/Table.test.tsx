import { render, screen } from '@testing-library/react';
import Table from '@components/tabular/table/basic/Table';
import TableItem from '@components/tabular/table/basic/TableItem';
import { describe, it, expect } from 'vitest';
import TableSkin from '@skins/defaults/Table/Table.default.skin';
import TableItemSkin from '@skins/defaults/Table/TableItem.default.skin';

describe('Table Component', () => {
  it('renders table with headers and rows', () => {
    render(
      <Table
        keyExtractor={(value, i) => `${value}-${i}`}
        renderers={{ renderer: TableSkin, childRenderer: TableItemSkin }}
      >
        <TableItem data={['name', 'age', 'country', 'level']} heading />
        <TableItem data={{ name: 'Jane Smith', age: 32, country: 'Canada', level: 'good' }} />
        <TableItem data={{ name: 'John Doe', age: 29, country: 'USA', level: 'excellent' }} />
      </Table>,
    );

    // Check for table headers
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('age')).toBeInTheDocument();
    expect(screen.getByText('country')).toBeInTheDocument();
    expect(screen.getByText('level')).toBeInTheDocument();

    // Check for row data
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
    expect(screen.getByText('Canada')).toBeInTheDocument();
    expect(screen.getByText('good')).toBeInTheDocument();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('29')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('excellent')).toBeInTheDocument();
  });
});
