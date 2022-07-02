import * as Styled from './style';

type Props = {
  type: 'OUTCOME' | 'INCOME' | 'TOTAL';
  amount: number;
  border?: boolean;
};

const TotalAmount = (props: Props) => {
  const renderTitle = () => {
    switch (props.type) {
      case 'OUTCOME':
        return '소비';
      case 'INCOME':
        return '수입';
      case 'TOTAL':
      default:
        return '총합';
    }
  };
  return (
    <Styled.TotalAmountWrapper $border={props.border}>
      <Styled.AmountTypeTitle>{renderTitle()}</Styled.AmountTypeTitle>
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
