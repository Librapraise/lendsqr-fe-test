// File: src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/Login";
import DashboardPage from './pages/Dashboard';
import UserDetailsPage from './pages/Userdetails';
import './styles/global.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;