import Calendar from '../../../common/components/Calendar/Calendar';
import History from '../../../common/components/History';
import TotalAmount from '../../../common/components/TotalAmount';
import * as Styled from './style';

const Outcome = () => {
  return (
    <Styled.Outcome>
      <TotalAmount type='OUTCOME' amount={1_500_000} />
      <Calendar />
      <History />
    </Styled.Outcome>
  );
};

export default Outcome;
