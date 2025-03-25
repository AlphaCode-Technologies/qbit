import Table from '@components/tabular/table/basic/Table';
import TableSkin from '@skins/defaults/Table/Table.default.skin';
import TableItem from '@components/tabular/table/basic/TableItem';
import TableItemSkin from '@skins/defaults/Table/TableItem.default.skin';
import { Checkbox, CheckboxItem, Radio, RadioOption } from './components';
import { Toaster } from '@components/displays/notifications';
import { ListItem, Tooltip, Badge } from '@components/displays';
import RadioOptionSkin from '@skins/defaults/radio/RadioOption.default.skin';
import RadioSkin from '@skins/defaults/radio/Radio.default.skin';
import { Breadcrumb, BreadcrumbItem } from '@components/displays/indicators';
import { useState } from 'react';
import Pagination from '@components/displays/segments/pagination/Pagination';
import PaginationSkin from '@skins/defaults/pagination/Pagination.defaut.skin';
import ColorPicker from '@components/inputs/color-picker/ColorPicker';
import ColorPickerSkin from '@skins/defaults/ColorPicker.default.skin';
import Rating from '@components/displays/indicators/ratings/Ratings';
import RatingSkin from '@skins/defaults/ratings/Rating.default.skin';
import {
  BadgesSkin,
  BreadcrumbItemSkin,
  BreadcrumbSkin,
  CheckboxItemSkin,
  CheckboxSkin,
  ListItemSkin,
  ToasterSkin,
  TooltipSkin,
} from './skins';

const App = () => {
  const [color, setColor] = useState('#ff0000');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(3);

  return (
    <div data-id="my-id">
      <Toaster
        open={true}
        position="top-center"
        renderers={{ renderer: ToasterSkin }}
        keyExtractor={(_, i: number) => `top-center-${i}`}
        className="m-2 shadow-xl"
      >
        <svg width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="583" height="80" rx="4" fill="white" />
          <path d="M12 16V64" stroke="#8E8E93" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M40 30C34.48 30 30 34.48 30 40C30 45.52 34.48 50 40 50C45.52 50 50 45.52 50 40C50 34.48 45.52 30 40 30Z"
            fill="#8E8E93"
          />
          <path d="M37.8077 44L34 40.4L35.2692 39.2L37.8077 41.6L43.7308 36L45 37.2L37.8077 44Z" fill="white" />
          <text x="65" y="35" fill="#000" fontSize="16" fontFamily="Arial" dominantBaseline="middle">
            This is the title
          </text>
          <text x="65" y="50" fill="#000" fontSize="16" fontFamily="Arial" dominantBaseline="middle">
            And this is some more information
          </text>
        </svg>
      </Toaster>
      <Tooltip
        renderers={{ renderer: TooltipSkin, childRenderer: ListItemSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        position={'bottom'}
        label={'Hello World'}
        className="bg-slate-300 p-1 rounded-lg shadow-lg"
      >
        <ListItem label="item 2" value="item 2" />
        <ListItem label="item 2" value="item 2" />
      </Tooltip>

      <Badge
        renderers={{ renderer: BadgesSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        size="xl"
      >
        <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
          {' '}
          xxxxxxx{' '}
        </text>
        <>
          <circle cx="28" cy="14" r="8" stroke="#D0D5DD" fill="white" />
          <foreignObject x="20" y="7" width="16" height="16">
            <img
              src={'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'}
              alt="Badge Icon"
              style={{ borderRadius: '50%', width: '100%', height: '100%' }}
            />
          </foreignObject>
        </>
      </Badge>
      <Radio
        renderers={{ renderer: RadioSkin, childRenderer: RadioOptionSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        defaultValue={'option2'}
      >
        <RadioOption label="Option 1" name="example" value="option1" />
        <RadioOption label="Option 2" name="example" value="option2" />
        <RadioOption label="Option 3" name="example" value="option3" />
      </Radio>
      <Breadcrumb
        renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        className="p-2"
      >
        <BreadcrumbItem value="Home" href="/" active />
        <BreadcrumbItem value="Category" href="/category" />
        <BreadcrumbItem value="Subcategory" href="/category/subcategory" />
        <BreadcrumbItem value="Current Page" disabled />
      </Breadcrumb>

      <Checkbox
        renderers={{ renderer: CheckboxSkin, childRenderer: CheckboxItemSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        className="flex gap-2"
      >
        <CheckboxItem
          name="Option 1"
          value="option1"
          checked={selectedValues.includes('option1')}
          onChange={(isChecked: any) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option1'] : prev.filter((val) => val !== 'option1')))
          }
        />

        <CheckboxItem
          name="Option 2"
          value="option2"
          checked={selectedValues.includes('option2')}
          onChange={(isChecked: any) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option2'] : prev.filter((val) => val !== 'option2')))
          }
        />

        <CheckboxItem
          name="Option 3"
          value="option3"
          checked={selectedValues.includes('option3')}
          onChange={(isChecked: any) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option3'] : prev.filter((val) => val !== 'option3')))
          }
        />
      </Checkbox>
      <br />

      <div className="p-5">
        <Table
          keyExtractor={(value: string, i: number) => `${value}-${i}`}
          renderers={{ renderer: TableSkin, childRenderer: TableItemSkin }}
        >
          <TableItem data={['name', 'age', 'country', 'level']} heading />
          <TableItem data={{ name: 'Raji', age: 69, country: 'Thai lanks', level: 'good' }} />
          <TableItem data={{ name: 'Dils', age: 69, country: 'Thai lanks', level: 'good' }} />
          <TableItem data={{ name: 'Muku', age: 69, country: 'Thai lanks', level: 'good' }} />
          <TableItem data={{ name: 'Dila', age: 69, country: 'Thai lanks', level: 'good' }} />
        </Table>
      </div>

      <Pagination
        className=" mt-2 ms-8"
        renderers={{ renderer: PaginationSkin }}
        currentPage={1}
        totalPages={10}
        onPageChange={(page) => console.log('Page changed to:', page)}
      />
      <br />
      <div className=" w-60">
        <ColorPicker
          renderers={{ renderer: ColorPickerSkin }}
          color={color}
          onChange={(value: any) => setColor(value)}
        />
        <p>Selected Color: {color}</p>
      </div>

      <Rating
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: RatingSkin }}
        rating={rating}
        ratingRange={5}
        size="xl"
        editable
        setRating={setRating}
      />
    </div>
  );
};

export default App;
