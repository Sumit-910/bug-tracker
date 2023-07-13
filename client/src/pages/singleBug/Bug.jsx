import './bug.scss';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../../components/sidebar/Sidebar';
import BugCard from '../../components/bugCard/BugCard';

const Bug = () => {

    const {bugid} = useParams();
    const [bug, setBug] = useState({});

    const getAllBugs = async () => {
        const config = {
          header: {
            "content-type": "application/json"
          }
        }
        try {
          const { data } = await axios.get("/api/bugauth/getAllBugs", config);
         
          const bugdata = data.find(e=>e._id===bugid);
            setBug(bugdata);
        } catch (err) {
          console.log(err);
        }
      }

    useEffect(()=>{
        
        getAllBugs();
    },[])

    return (
        <>
            <div className="bug">
                <Sidebar />
                <div className="bugdetail">
                    <BugCard bug={bug} />
                </div>
            </div>
        </>
    )
}

export default Bug
