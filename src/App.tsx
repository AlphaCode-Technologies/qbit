import { ListItemSkin, ToasterSkin } from '@skins/defaults';
import { Toaster } from '@components/displays/notifications';
import { TooltipSkin } from '@skins/defaults';
import { ListItem, Tooltip } from '@components/displays';
import { Badge } from '@components/displays';
import { BadgesSkin } from '@skins/defaults';
import { BreadcrumbItemSkin, BreadcrumbSkin, CheckboxItemSkin, CheckboxSkin } from '@skins/defaults';
import RadioOptionSkin from '@skins/defaults/radio/RadioOption.default.skin';
import RadioSkin from '@skins/defaults/radio/Radio.default.skin';
import Radio from '@components/inputs/choices/radios/radio/Radio';
import RadioOption from '@components/inputs/choices/radios/radio/RadioOption';
import { Breadcrumb, BreadcrumbItem } from '@components/displays/indicators';
import { Checkbox, CheckboxItem } from '@components/inputs/choices/checkboxes';
import { useState } from 'react';

const App = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
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
        <BreadcrumbItem name="Home" href="/" active />
        <BreadcrumbItem name="Category" href="/category" />
        <BreadcrumbItem name="Subcategory" href="/category/subcategory" />
        <BreadcrumbItem name="Current Page" disabled />
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
          onChange={(isChecked) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option1'] : prev.filter((val) => val !== 'option1')))
          }
        />

        <CheckboxItem
          name="Option 2"
          value="option2"
          checked={selectedValues.includes('option2')}
          onChange={(isChecked) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option2'] : prev.filter((val) => val !== 'option2')))
          }
        />

        <CheckboxItem
          name="Option 3"
          value="option3"
          checked={selectedValues.includes('option3')}
          onChange={(isChecked) =>
            setSelectedValues((prev) => (isChecked ? [...prev, 'option3'] : prev.filter((val) => val !== 'option3')))
          }
        />
      </Checkbox>
    </div>
  );
};

export default App;
