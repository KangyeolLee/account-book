import * as Styled from './style';

const History = () => {
  return (
    <Styled.HistoryWrapper>
      <Styled.Title>전체 내역</Styled.Title>
      <Styled.History>
        <Styled.HistoryItem>
          <Styled.HistoryItemDate>26일 일요일</Styled.HistoryItemDate>
          <Styled.HistoryDetail>-4,500원</Styled.HistoryDetail>
        </Styled.HistoryItem>

        <Styled.HistoryItem>
          <Styled.HistoryItemDate>25일 토요일</Styled.HistoryItemDate>
          <Styled.HistoryDetail>-24,500원</Styled.HistoryDetail>
        </Styled.HistoryItem>

        <Styled.HistoryItem>
          <Styled.HistoryItemDate>24일 금요일</Styled.HistoryItemDate>
          <Styled.HistoryDetail>-44,500원</Styled.HistoryDetail>
        </Styled.HistoryItem>
      </Styled.History>
    </Styled.HistoryWrapper>
  );
};

export default History;
