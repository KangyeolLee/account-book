import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Income from '../pages/Income';
import Outcome from '../pages/Outcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/outcome' element={<Outcome />} />
        <Route path='/income' element={<Income />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
