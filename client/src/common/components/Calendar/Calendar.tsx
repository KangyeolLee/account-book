import { useState } from 'react';
import BaeCalendar from 'react-calendar';
import dayjs from 'dayjs';

import * as Styled from './style';
import { useAtom } from 'jotai';
import { selectedDateAtom } from '../../../jotai/atoms/date';

const Calendar = () => {
  const [date, setDate] = useAtom(selectedDateAtom);

  return (
    <Styled.Calendar>
      <BaeCalendar
        onChange={setDate}
        value={date}
        formatDay={(_, date) => dayjs(date).format('DD')}
        showNeighboringMonth={false}
        tileClassName={({ date }) => {
          const className =
            date.getDay() === 0
              ? 'weekend-sunday'
              : date.getDay() === 6
              ? 'weekend-saturday'
              : '';
          return className;
        }}
      />
    </Styled.Calendar>
  );
};

export default Calendar;
