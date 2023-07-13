import './dashboard.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../../components/sidebar/Sidebar'
import Card from '../../components/dashboard/card/Card';
import Details from '../../components/dashboard/details/Details';

import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BugReportIcon from '@mui/icons-material/BugReport';
import QueueIcon from '@mui/icons-material/Queue';



const Dashboard = () => {

  const [user, setUser] = useState({});
  const [bugsData, setBugsData] = useState({});
  const [pending, setPending] = useState();
  const [total, setTotal] = useState(0);
  // const []

  const getUser = async () => {
    // console.log(JSON.parse(localStorage.getItem("bugauthtoken")));
    // const xyz = localStorage.getItem("bugauthtoken");

    const config = {
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("bugauthtoken")}`
        Authorization: `Bearer ${localStorage.getItem("bugauthtoken")}`
      }
    }
    try {
      const {data} = await axios.get("/api/userauth/getUser", config);
      // console.log(config.headers.authorization);
      setUser(data);

    } catch (err) {
      console.log(err);
    }
  }

  const getAllBugs = async () => {
    const config = {
      header: {
        "content-type": "application/json"
      }
    }
    try {
      const { data } = await axios.get("/api/bugauth/getAllBugs", config);
      console.log(data);
      // setBugs(data);
      setBugsData(data);
      // console.log(bugsData);
      setTimeout(() => {
        setTotal(bugsData.length);
      console.log(total);
      }, 2000);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    
    getUser();
    
    getAllBugs();
  }, [])

  const cardData = [
    {
      link: "/createBug",
      name: "Create a Bug",
      icon: <QueueIcon />,
      details: "Bugs Created",
      value: user.bugsCreated
      // value: 4
    },
    {
      link: "/bugs?status=all",
      name: "All Bugs",
      icon: <BugReportIcon />,
      details: "Total Bugs",
      value: 11
    },
    {
      link: "/bugs?status=pending",
      name: "Pending Bugs",
      icon: <PendingActionsIcon />,
      details: "Pending Bugs",
      value: 6
    }
  ]

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="right">
          <div className="up">
            {cardData?.map((data, id) => (
              <Card data={data} key={id} />
            ))}
          </div>
          <div className="down">
            <Details />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
