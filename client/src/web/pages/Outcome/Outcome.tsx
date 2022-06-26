import History from '../../../common/components/History';
import TotalAmount from '../../../common/components/TotalAmount';
import * as Styled from './style';

const Outcome = () => {
  return (
    <Styled.Outcome>
      <TotalAmount type='OUTCOME' />
      <History />
    </Styled.Outcome>
  );
};

export default Outcome;
