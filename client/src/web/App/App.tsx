import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../../routes';
import TopNavigation from '../domains/App/components/TopNavigation';
import * as Styled from './style';

function App() {
  return (
    <Styled.App>
      <BrowserRouter>
        <TopNavigation />
        <Routes>
          {routes.list.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.pcComponent}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Styled.App>
  );
}

export default App;
