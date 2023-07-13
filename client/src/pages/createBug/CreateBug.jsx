import './createBug.scss';

import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

import Sidebar from '../../components/sidebar/Sidebar';
import { userData } from '../../dummydata/user';

/*
project name
project src link
bug name
bug detail
bug priority
bug status
*/
const CreateBug = () => {
  const [bugInfo, setBugInfo] = useState({
    projectName: "",
    projectLink: "",
    bugName: "",
    bugDetails: "",
    priority: "",
    status: ""
  })

  const [user, setUser] = useState({});

  useEffect(() => {
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
        console.log(err.response.data);
        console.log(err.response.config.headers);
      }
    }
    getUser();
  }, [])

  const [assignedUsers, setAssignedUsers] = useState([]);

  // const users = userData.map(e=>e.firstname)
  const users = userData.map(data => ({ label: data.firstname, value: data.firstname }))
  // console.log(users);


  const createBug = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-type": "application/json"
      }
    }

    const {
      projectName,
      projectLink,
      bugName,
      bugDetails,
      priority,
      status
    } = bugInfo;

    try {
      // const {data} = 
      await axios.post(
        "/api/bugauth/createBug",
        {
          projectName,
          projectLink,
          bugName,
          bugDetails,
          priority,
          status,
          owner: user.firstname,
          assignedUsers
        },
        config
      )


      setBugInfo({
        projectName: "",
        projectLink: "",
        bugName: "",
        bugDetails: "",
        priority: "",
        status: ""
      });

    } catch (err) {
      console.log(err);
    }

    
  }

  const onChange = (e) => {
    setBugInfo({
      ...bugInfo,
      [e.target.name]: e.target.value
    }
    )
  }

  const handleChange = (selectedUser) => {
    // console.log("handle change ", selectedUser);
    const userList = selectedUser?.map(e => e.value)
    setAssignedUsers(userList);
    // console.log(assignedUsers);
  }

  const loadOptions = (value, callback) => {
    const filteredOPtions = users.filter(option => option.label.toLowerCase().includes(value.toLowerCase()))
    callback(filteredOPtions);
  }

  return (
    <>
      <div className="createbug">
        <Sidebar />
        <div className="formspace">
          <h1>Create a Bug</h1>
          <form>
            <div className="pname">
              <input type="text" required placeholder='Project Name' name='projectName' value={bugInfo.projectName} onChange={(e) => { onChange(e) }} />
            </div>
            <div className="plink">
              <input type="text" required placeholder='Project src link' name='projectLink' value={bugInfo.projectLink} onChange={(e) => { onChange(e) }} />
            </div>
            <div className="bname">
              <input type="text" required placeholder='Bug Name' name='bugName' value={bugInfo.bugName} onChange={(e) => { onChange(e) }} />
            </div>
            <div className="bdetail">
              <input type="text" required placeholder='Bug Detail' name='bugDetails' value={bugInfo.bugDetails} onChange={(e) => { onChange(e) }} />
            </div>
            <div className="radios">
              <div className="priority">
                <legend>Priority: </legend>
                <div className="alloptions">
                  <div className="options">
                    <label>
                      <input type="radio" name="priority" value="high" onChange={onChange} checked={bugInfo.priority === "high"} />
                      <span>High</span>
                    </label>
                  </div>
                  <div className="options">
                    <label>
                      <input type="radio" name="priority" value="medium" onChange={onChange} checked={bugInfo.priority === "medium"} />
                      <span>Medium</span>
                    </label>
                  </div>
                  <div className="options">
                    <label>
                      <input type="radio" name="priority" value="low" onChange={onChange} checked={bugInfo.priority === "low"} />
                      <span>Low</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="status">
                <legend>Status: </legend>
                <div className="alloptions">
                  <div className="options">
                    <label>
                      <input type="radio" name="status" value="pending" onChange={onChange} checked={bugInfo.status === "pending"} />
                      <span>Pending</span>
                    </label>
                  </div>
                  <div className="options">
                    <label>
                      <input type="radio" name="status" value="completed" onChange={onChange} checked={bugInfo.status === "completed"} />
                      <span>Completed</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="assignUsers">
              <h4>Assign to: </h4> &nbsp;&nbsp;
              <AsyncSelect loadOptions={loadOptions} defaultOptions isMulti closeMenuOnSelect={false} onChange={handleChange} />
            </div>
            <button className='submitbtn' onClick={(e) => { createBug(e) }} >Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateBug
