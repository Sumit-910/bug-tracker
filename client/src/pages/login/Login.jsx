import './login.scss';

import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { login } from '../../context/auth/apiCalls';
import { AuthContext } from '../../context/auth/AuthContext';

import BugReportIcon from '@mui/icons-material/BugReport';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const [pass, setPass] = useState(1);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleonChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = user;
        await login({ email, password }, dispatch);
        navigate("/");

        // const config = {
        //     header: {
        //         "content-type": "application/json"
        //     }
        // }

        // try {
        //     const {email, password} = user;

        //     const data = await axios.post(
        //         "/api/userauth/loginUser",
        //         { email, password },
        //         config
        //     )

        //     if(data.status === 200){
        //         localStorage.setItem("bugauthtoken",data.data);
        //         navigate("/signup")
        //     }

        // } catch (err) {
        //     console.log(err);
        // }
    }

    return (
        <>
            <div className="login">
                <div className="logo">
                    <BugReportIcon className='logoi' />
                    <p>Bug Tracker</p>
                </div>
                <div className="formspace">
                    <div className="textarea">
                        Login
                    </div>
                    <form className="loginform">
                        <input type="text" name="email" placeholder='Email' autoComplete='off' value={user.email} onChange={(e) => { handleonChange(e) }} />
                        <div className="password">
                            <input type={pass ? "password" : "text"} name="password" placeholder='Password' autoComplete='off' value={user.password} onChange={(e) => { handleonChange(e) }} />
                            <div className="icon" onClick={() => { setPass((pass) => !pass) }} >
                                {pass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </div>
                            <button className='loginbtn' onClick={(e) => { loginUser(e) }} >Login</button>
                        </div>
                    </form>
                    <div className="signuppage">
                        Not registered?&nbsp;
                        <Link to="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login