import './bugBar.scss';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TimerIcon from '@mui/icons-material/Timer';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const BugBar = ({bugData}) => {
    const {bugName, status, priority, _id} = bugData;
    console.log(_id);
    const [pcolor, setPcolor] = useState("");

    useEffect(()=>{
        const getColor = () =>{
            if(priority==="high"){setPcolor("#FF413E")}
            else if(priority==="medium"){setPcolor("yellow")}
            else{setPcolor("blue")}
        }
        getColor();
    },[priority])

    const pstyle = {
        color : pcolor,
        border : `2px solid ${pcolor}`
    }
    return (
        <>
            <Link to={`/bugs/${_id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
            <div className="bugbar" key={_id} >
                <div className="bugname">{bugName}</div>
                <div className="status" style={{backgroundColor: status==="pending"?"#FFAAAA":"#00FF00"}} >
                    {status==="pending"?<TimerIcon />:<TaskAltIcon />}
                    {status}
                </div>
                <div className="priority" style={pstyle} >{priority}</div>
                <div className="date">1 July 2023</div>
            </div>
            </Link>
            <hr className='separation' />
        </>
    )
}

export default BugBar
