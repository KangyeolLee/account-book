import styled from 'styled-components';
import COLOR from '../../../styles/colors';
import Price from '../Price';

export const TotalAmountWrapper = styled.article`
  border: 1px solid ${COLOR.GREY_500};
  border-radius: 4px;
  padding: 15px;
`;

export const AmountTypeTitle = styled.h3`
  margin-top: 0;
`;

export const TotalAmount = styled(Price)``;
