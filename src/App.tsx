// File: src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/Login";
import DashboardPage from './pages/Dashboard';
import './styles/global.scss';
import UserDetails from './pages/Userdetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;