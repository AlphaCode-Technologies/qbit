import { Toaster } from '@components/displays/notifications';
import { SelectSkin, TooltipSkin } from '@skins/defaults';
import { ListItem, Tooltip } from '@components/displays';
import { ListItemSkin, ToasterSkin } from '@skins/defaults';
import RadioOptionSkin from '@skins/defaults/radio/RadioOption.default.skin';
import RadioSkin from '@skins/defaults/radio/Radio.default.skin';
import Radio from '@components/inputs/choices/radios/radio/Radio';
import RadioOption from '@components/inputs/choices/radios/radio/RadioOption';
import SelectOptionSkin from '@skins/defaults/select/SelectOption.default.skin';
import SelectOption from '@components/inputs/choices/select/SelectOption';
import { Select } from '@components/inputs/choices';

const App = () => {
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

      <Radio
        renderers={{ renderer: RadioSkin, childRenderer: RadioOptionSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        defaultValue={'option2'}
      >
        <RadioOption label="Option 1" name="example" value="option1" />
        <RadioOption label="Option 2" name="example" value="option2" />
        <RadioOption label="Option 3" name="example" value="option3" />
      </Radio>

      <Select
        renderers={{ renderer: SelectSkin, childRenderer: SelectOptionSkin }}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        defaultValue="Option 1"
      >
        <SelectOption label="Option 1" value="option1" testId="test1" />
        <SelectOption label="Option 2" value="option2" />
        <SelectOption label="Option 3" value="option3" disabled />
      </Select>
    </div>
  );
};

export default App;
