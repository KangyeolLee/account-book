import * as Styled from './style';

const History = () => {
  return (
    <Styled.HistoryWrapper>
      <Styled.Title>전체 내역 </Styled.Title>
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
