import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../../routes';

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
