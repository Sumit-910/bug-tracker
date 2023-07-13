import './bugCard.scss';

import { useEffect, useState } from 'react';

import TimerIcon from '@mui/icons-material/Timer';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const BugCard = ({ bug }) => {

    const {
        projectName,
        projectLink,
        bugName,
        bugDetails,
        priority,
        status
    } = bug;

    const [pcolor, setPcolor] = useState("");

    useEffect(() => {
        const getColor = () => {
            if (priority === "high") { setPcolor("#FF413E") }
            else if (priority === "medium") { setPcolor("yellow") }
            else { setPcolor("blue") }
        }
        getColor();
    }, [priority])

    const pstyle = {
        color: pcolor,
        border: `2px solid ${pcolor}`,
        padding: "2px 10px",
        borderRadius: "20px",
        margin: "auto"
    }

    return (
        <>
            <div className="bugcard">
                <div className="bugname">{bugName}</div>
                <div className="bdetails">
                    <hr />
                    <p className="phead">PROJECT</p>
                    <p><strong>Name</strong>: {projectName}</p>
                    <p><strong>Source Code</strong>: {projectLink}</p>
                    <hr />
                    <p className="bugd">BUG</p>
                    <p><strong>Name</strong>: {bugName}</p>
                    <p><strong>Priority</strong>: <span style={pstyle} >{priority}</span></p>
                    <div className='bstatus' ><strong>Status</strong>: 
                        <span className='bstatusin' style={{ backgroundColor: status === "pending" ? "#FFAAAA" : "#00FF00" }} >{status === "pending" ? <TimerIcon /> : <TaskAltIcon />}{status}</span></div>
                    <p><strong>Description</strong>: </p>
                    <p className='bdesc' >{bugDetails}</p>
                </div>
                <div className="bbtns">
                    <button className="editbtn">Edit</button>
                    <button className="delbtn">Delete</button>
                </div>
            </div>
        </>
    )
}

export default BugCard
