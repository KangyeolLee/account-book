import styled from 'styled-components';
import COLOR from '../../../styles/colors';
import { initBoxModel } from '../../../styles/helper';
import Price from '../Price';

export const TotalAmountWrapper = styled.article`
  border: 1px solid ${COLOR.GREY_500};
  border-radius: 4px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

export const AmountTypeTitle = styled.h3`
  margin-top: 0;
  ${initBoxModel};
`;

export const TotalAmount = styled(Price)``;
