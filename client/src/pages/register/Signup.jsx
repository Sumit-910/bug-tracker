import './signup.scss';

import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

import BugReportIcon from '@mui/icons-material/BugReport';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    const navigate = useNavigate();

    const [pass, setPass] = useState(1);
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const handleonChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const signup = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "content-type": "application/json"
            }
        }

        try {
            const { firstname, lastname, email, password } = user;

            const data = await axios.post(
                "/api/userauth/createUser",
                { firstname, lastname, email, password },
                config
            )
            console.log(data);

            if(data.status === 200){
                navigate("/login");
            }
            else{
                window.alert("Invalid Registration");
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="signup">
                <div className="logo">
                    <BugReportIcon className='logoi' />
                    <p>Bug Tracker</p>
                </div>
                <div className="formspace">
                    <div className="textarea">
                        Create New Account
                    </div>
                    <form className="signupform">
                        <div className="nameField">
                            <input type='text' name='firstname' placeholder='First Name' autoComplete='off' value={user.firstname} onChange={(e) => { handleonChange(e) }} />
                            <input type='text' name='lastname' placeholder='Last Name' autoComplete='off' value={user.lastname} onChange={(e) => { handleonChange(e) }} />
                        </div>
                        <input type="text" name="email" placeholder='Email' autoComplete='off' value={user.email} onChange={(e) => { handleonChange(e) }} />
                        <div className="password">
                            <input type={pass ? "password" : "text"} name="password" placeholder='Password' autoComplete='off' value={user.password} onChange={(e) => { handleonChange(e) }} />
                            <div className="icon" onClick={() => { setPass((pass) => !pass) }} >
                                {pass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </div>
                            <button className='signupbtn' onClick={(e) => { signup(e) }} >Create Account</button>
                        </div>
                    </form>
                    <div className="loginpage">
                        Already registered?&nbsp;
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
