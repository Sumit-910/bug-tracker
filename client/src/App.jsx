import './app.css';

import { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from './context/auth/AuthContext';
import Login from "./pages/login/Login";
import Signup from "./pages/register/Signup";
import Dashboard from './pages/dashboard/Dashboard';
import CreateBug from './pages/createBug/CreateBug';
import Bugs from './pages/bugs/Bugs';
import Settings from './pages/settings/Settings';
import Bug from './pages/singleBug/Bug';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/Signup" />} />
        <Route path="/Signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        {
          user &&
          <>
            <Route path="/createBug" element={<CreateBug />} />
            <Route path="/bugs" element={<Bugs />} />
            <Route path="/bugs/:bugid" element={<Bug />} />
            <Route path="/settings" element={<Settings />} />
          </>
        }
      </Routes>
    </>
  );
}

export default App;
