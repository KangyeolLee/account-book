import Dashboard from '../web/pages/Dashboard';
import Income from '../web/pages/Income';
import Main from '../web/pages/Main';
import Outcome from '../web/pages/Outcome';
import Page from './model/page';
import Pages from './model/pages';
import RoutePath from './routePath';

const MainPage = new Page({
  path: RoutePath.MAIN,
  title: '메인',
  pcComponent: <Main />,
});

const DashboardPage = new Page({
  path: RoutePath.DASHBOARD,
  title: '대시보드',
  pcComponent: <Dashboard />,
});

const ImcomePage = new Page({
  path: RoutePath.INCOME,
  title: '수입',
  pcComponent: <Income />,
});

const OutcomePage = new Page({
  path: RoutePath.OUTCOME,
  title: '소비',
  pcComponent: <Outcome />,
});

const routes = new Pages([MainPage, DashboardPage, ImcomePage, OutcomePage]);

export default routes;
