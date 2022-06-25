import Menus from '../../domains/Dashboard/components/Menus';
import Profile from '../../domains/Dashboard/components/Profile';

import * as Styled from './style';

const Dashboard = () => {
  return (
    <Styled.Dashboard>
      <Profile />
      <Menus />
    </Styled.Dashboard>
  );
};

export default Dashboard;
