import History from '../../../common/components/History';
import TotalAmount from '../../../common/components/TotalAmount';
import * as Styled from './style';

const Income = () => {
  return (
    <Styled.Income>
      <TotalAmount type='INCOME' />
      <History />
    </Styled.Income>
  );
};

export default Income;
