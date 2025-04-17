import { Calendar } from '@inputs/chrono';
import CalendarHeader from './components/inputs/chrono/calendar/CalendarHeader.tsx';
import CalendarBody from './components/inputs/chrono/calendar/CalendarBody.tsx';
import { CalendarBrandSkin, CalendarDayBrandSkin, CalendarHeaderBrandSkin } from '@skins/variant';

const App = () => {
  return (
    <div data-id="my-id" className="my-5 max-w-4xl mx-auto">
      <Calendar
        renderers={{ renderer: CalendarBrandSkin }}
        selectedView={'month'}
        selectedDate={new Date(2025, 10, 24)}
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
      >
        <CalendarHeader renderers={{ renderer: CalendarHeaderBrandSkin }} />
        <CalendarBody
          renderers={{ renderer: CalendarDayBrandSkin }}
          className="grid grid-cols-7 border-l border-t border-gray-300"
        ></CalendarBody>
      </Calendar>
    </div>
  );
};

export default App;
