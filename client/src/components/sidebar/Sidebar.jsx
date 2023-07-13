import './sidebar.scss';

import { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import { logoutuser } from '../../context/auth/apiCalls';
import { AuthContext } from '../../context/auth/AuthContext';

import BugReportIcon from '@mui/icons-material/BugReport';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import QueueIcon from '@mui/icons-material/Queue';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  
  const logoutUser = async() => {
    localStorage.removeItem("bugauthtoken");
    await logoutuser(dispatch);
    navigate("/login");
  }

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <Link to="/" ><BugReportIcon /></Link>
        </div>
        <div className='itemlist' >
            <NavLink to="/" className={`items ${({isActive}) => (isActive ? "active-style" : 'none')}`} ><DashboardCustomizeIcon/>&nbsp;Dashboard</NavLink>

            <NavLink to="/createBug" className={`items ${({isActive}) => (isActive ? "active-style" : 'none')}`} ><QueueIcon/>&nbsp;Create Bug</NavLink>

            <NavLink to="/bugs" className={`items ${({isActive}) => (isActive ? "active-style" : 'none')}`} ><BugReportIcon/>&nbsp;Bugs</NavLink>

            <NavLink to="/settings" className={`items ${({isActive}) => (isActive ? "active-style" : 'none')}`} ><SettingsIcon/>&nbsp;Settings</NavLink>

            <div className='items' onClick={logoutUser} ><LogoutIcon/>&nbsp;Logout</div>
        </div>
      </div>
    </>
  )
}

export default Sidebar