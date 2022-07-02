import Calendar from '../../../common/components/Calendar/Calendar';
import History from '../../../common/components/History';
import TotalAmount from '../../../common/components/TotalAmount';
import * as Styled from './style';

const Income = () => {
  return (
    <Styled.Income>
      <TotalAmount type='INCOME' amount={3_000_000} border />
      <Calendar />
      <History />
    </Styled.Income>
  );
};

export default Income;
