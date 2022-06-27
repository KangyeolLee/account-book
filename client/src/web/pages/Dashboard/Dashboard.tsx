import Menus from '../../domains/Dashboard/components/Menus';
import Profile from '../../domains/Dashboard/components/Profile';
import TotalSummary from '../../domains/Dashboard/components/TotalSummary';

import * as Styled from './style';

const Dashboard = () => {
  return (
    <Styled.Dashboard>
      <Profile />
      <TotalSummary />
      <Menus />
    </Styled.Dashboard>
  );
};

export default Dashboard;
