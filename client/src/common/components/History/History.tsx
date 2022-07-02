import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { selectedDayAtom } from '../../../jotai/atoms/date';
import * as Styled from './style';

const History = () => {
  const [selectedDay, initDateToToday] = useAtom(selectedDayAtom);

  useEffect(() => {
    return () => initDateToToday(new Date());
  }, []);

  return (
    <Styled.HistoryWrapper>
      <Styled.Title>전체 내역 (오늘날짜 : {selectedDay}일)</Styled.Title>
      <Styled.History>
        <Styled.HistoryItem>
          <Styled.HistoryItemDate>26일 일요일</Styled.HistoryItemDate>
          <Styled.HistoryDetail
            end={4_500}
            seperator=','
            prefix='-'
            suffix='원'
          />
        </Styled.HistoryItem>

        <Styled.HistoryItem>
          <Styled.HistoryItemDate>25일 토요일</Styled.HistoryItemDate>
          <Styled.HistoryDetail
            end={24_500}
            seperator=','
            prefix='-'
            suffix='원'
          />
        </Styled.HistoryItem>

        <Styled.HistoryItem>
          <Styled.HistoryItemDate>24일 금요일</Styled.HistoryItemDate>
          <Styled.HistoryDetail
            end={44_500}
            seperator=','
            prefix='-'
            suffix='원'
          />
        </Styled.HistoryItem>
      </Styled.History>
    </Styled.HistoryWrapper>
  );
};

export default History;
