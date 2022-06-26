import styled from 'styled-components';
import COLOR from '../../../styles/colors';

export const HistoryWrapper = styled.article`
  border: 1px solid ${COLOR.GREY_500};
  border-radius: 4px;
  padding: 15px;
`;

export const Title = styled.h3`
  margin-top: 0%; ;
`;

export const History = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HistoryItem = styled.li``;

export const HistoryItemDate = styled.span``;

export const HistoryDetail = styled.div``;
