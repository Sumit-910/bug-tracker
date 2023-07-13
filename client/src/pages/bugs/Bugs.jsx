import './bugs.scss';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar'
import BugBar from '../../components/BugBar/BugBar';
import axios from 'axios';

// import { bugDetail } from '../../dummydata/bugs';

const Bugs = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [status, setStatus] = useState(searchParams.get('status') ? searchParams.get('status') : "all");
  const [priority, setPriority] = useState('all');
  // const [bugs, setBugs] = useState();
  const [bugsData, setBugsData] = useState();

  const handlestatusChange = (e) => {
    setStatus(e.target.value);
    setSearchParams({ status: e.target.value });
  }

  const handleprioChange = (e) => {
    setPriority(e.target.value);

  }

  const getAllBugs = async () => {
    const config = {
      header: {
        "content-type": "application/json"
      }
    }
    try {
      const { data } = await axios.get("/api/bugauth/getAllBugs", config);
      // setBugs(data);
      setBugsData(data);
      // console.log(bugsData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    
    const showBugs = async () => {
      await getAllBugs();

      // setBugsData(bugs);

      if (priority !== "all") {
        setBugsData(bugsData => bugsData?.filter(e => e.priority === priority));
      }

      if (status !== "all") {
        setBugsData(bugsData => bugsData?.filter(e => e.status === status));
      }
    }
    showBugs();
  }, [ status, priority])

  // useEffect(() => {
  //   setBugsData(bugs);

  //   if (priority !== "all") {
  //     setBugsData(bugsData => bugsData?.filter(e => e.priority === priority));
  //   }

  //   if (status !== "all") {
  //     setBugsData(bugsData => bugsData?.filter(e => e.status === status));
  //   }

  // }, [bugs, status, priority])

  return (
    <>
      <div className="bugs">
        <Sidebar />
        <div className="right">
          <div className="topmenu">
            <div className="title">BUGS</div>
            <div className="filter">
              <div className="status">

                <label>
                  Status: &nbsp;
                  <select value={status} onChange={handlestatusChange}>
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </label>

              </div>
              <div className="priority">

                <label>
                  Priority: &nbsp;
                  <select value={priority} onChange={handleprioChange} >
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </label>

              </div>
            </div>
          </div>
          <div className="down">
            <div className="table">
              <div className="head">
                <div className="bugname">Bug</div>
                <div className="status">Status</div>
                <div className="priority">Priority</div>
                <div className="date">Date & Time</div>
              </div>
              <div className="bar">
                {
                  bugsData?.map(
                    (bugData, id) => (
                      <div className="bbar" key={id} >
                        <BugBar bugData={bugData} />
                      </div>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bugs
