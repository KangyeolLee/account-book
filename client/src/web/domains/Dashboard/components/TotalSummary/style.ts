import styled from 'styled-components';
import COLOR from '../../../../../styles/colors';

export const TotalSummary = styled.article`
  border: 1px solid ${COLOR.GREY_400};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  margin: 10px 0;
  background-color: ${COLOR.GREY_400};
`;
