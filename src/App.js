import './App.css';
import Profile from './profile/Profile';
import Table from './Table';
import Account from './Account';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Profile />} />
        <Route path="/table" element={<Table />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
