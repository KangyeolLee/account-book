import * as Styled from './style';

type Props = {
  type: 'OUTCOME' | 'INCOME';
  amount: number;
};

const TotalAmount = (props: Props) => {
  return (
    <Styled.TotalAmountWrapper>
      <Styled.AmountTypeTitle>
        {props.type === 'INCOME' ? '수입' : '소비'}
      </Styled.AmountTypeTitle>
      <Styled.TotalAmount
        end={props.amount}
        seperator=','
        prefix='+'
        suffix='원'
      />
    </Styled.TotalAmountWrapper>
  );
};

export default TotalAmount;
