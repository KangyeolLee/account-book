import TotalAmount from '../../../../../common/components/TotalAmount';
import * as Styled from './style';

const TotalSummary = () => {
  return (
    <Styled.TotalSummary>
      <TotalAmount type='INCOME' amount={3_000_000} />
      <TotalAmount type='OUTCOME' amount={2_000_000} />
      <Styled.Divider />
      <TotalAmount type='TOTAL' amount={1_000_000} />
    </Styled.TotalSummary>
  );
};

export default TotalSummary;
