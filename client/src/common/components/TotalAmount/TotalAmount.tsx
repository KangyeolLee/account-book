import * as Styled from './style';

type Props = {
  type: 'OUTCOME' | 'INCOME';
};

const TotalAmount = (props: Props) => {
  return (
    <Styled.TotalAmountWrapper>
      <Styled.AmountTypeTitle>
        {props.type === 'INCOME' ? '수입' : '소비'}
      </Styled.AmountTypeTitle>
      <Styled.TotalAmount>2,078,000 원</Styled.TotalAmount>
    </Styled.TotalAmountWrapper>
  );
};

export default TotalAmount;
