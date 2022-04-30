import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export const TaskForm = () => {
  var navigate = useNavigate();
  var id = useParams().id1;

  const [TaskName, setTaskName] = useState("");
  const [Description, setDescription] = useState("");
  const [Project, setProject] = useState([]);
  const [projectid, setprojectid] = useState("");
  const [Module, setModule] = useState([]);
  const [Moduleid, setModuleid] = useState("");
  const [priority, setpriority] = useState([]);
  const [priorityid, setpriorityid] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [TotalHours, setTotalHours] = useState("");
  const [UtilisedHours, setUtilisedHours] = useState("");
  const [user, setuser] = useState([]);
  const [userid, setuserid] = useState("");
  const [status, setstatus] = useState([]);
  const [statusid, setstatusid] = useState("");

  const getproject = async () => {
    await axios.get("http://localhost:4000/project").then((res) => {
      setProject(res.data.data);
      console.log(res.data.data);
    });
  };
  const getpriority = async () => {
    await axios.get("http://localhost:4000/priority").then((res) => {
      setpriority(res.data.data);
      console.log(res.data.data);
    });
  };
  const getuser = async () => {
    await axios.get("http://localhost:4000/user").then((res) => {
      setuser(res.data.data);
      console.log(res.data.data);
    });
  };
  const getstatus = async () => {
    await axios.get("http://localhost:4000/status").then((res) => {
      setstatus(res.data.data);
      console.log(res.data.data);
    });
  };
  useEffect(() => {
    getproject();
    getpriority();
    getuser();
    getstatus();
  }, []);

  const TaskChangeHandler = (e) => {
    setTaskName(e.target.value);
  };

  const ModuleChangeHandler = (e) => {
    console.log(e.target.value);
    setModuleid(e.target.value);
  };
  const PriorityChangeHandler = (e) => {
    console.log(e.target.value);
    setpriorityid(e.target.value);
  };
  const UserChangeHandler = (e) => {
    console.log(e.target.value);
    setuserid(e.target.value);
  };
  const StatusChangehandler = (e) => {
    console.log(e.target.value);
    setstatusid(e.target.value);
  };

  const ProjectChangeHandler = async (e) => {
    console.log(e.target.value);
    setprojectid(e.target.value);

    await axios
      .get(`http://localhost:4000/modulebyproject/${e.target.value}`)
      .then((res) => {
        setModule(res.data.data);
        console.log(res.data.data);
      });
  };
  const DescriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const StartDateChangeHandler = (e) => {
    setStartDate(e.target.value);
  };
  const EndDateChangeHandler = (e) => {
    setEndDate(e.target.value);
  };
  const TotalHoursChangeHandler = (e) => {
    setTotalHours(e.target.value);
  };
  const UtilisedHoursChangeHandler = (e) => {
    setUtilisedHours(e.target.value);
  };
  //   const showtoast = async ()=>{

  //     await toast.success('🦄 Wow so easy!', {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });
  //   }
  const submit = (e) => {
    e.preventDefault();

    //window.location.href = "http://localhost:3000/Dashboard"

    axios.post("http://localhost:4000/task", data).then((res) => {
      //   if(res.status ==200){
      //     showtoast()
      //     setTimeout(() => {
      //       navigate("/Dashboard")
      //     }, 2000);

      //   }
      //   else{
      //     showtoast()
      //   }

      console.log(res.data.data);
      navigate("/Projects");
      // window.location.href ="http://localhost:3000/ProjectModules/6238a03619d54feed03cf22e"
    });
  };

  var data = {
    taskname: TaskName,
    module: Moduleid,
    discription: Description,
    project: projectid,
    startdate: StartDate,
    enddate: EndDate,
    totalhours: TotalHours,
    utilisedhours: UtilisedHours,
    priority: priorityid,
    user: userid,
    status: statusid,
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div class="form-group">
          <label>
            <b>Task-Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter TaskName"
            onChange={(e) => {
              TaskChangeHandler(e);
            }}
          />
        </div>
        <div class="form-group">
          <label>
            <b>Project</b>
          </label>
          <select class="form-control" onChange={ProjectChangeHandler}>
            {Project.map((row) => {
              return <option value={row._id}>{row.projectname}</option>;
            })}
          </select>
          {projectid}
        </div>
        <div class="form-group">
          <label>
            <b>Module</b>
          </label>
          <select class="form-control" onChange={ModuleChangeHandler}>
            {Module.map((row) => {
              return <option value={row._id}>{row.modulename}</option>;
            })}
          </select>
          {Moduleid}
        </div>
        <div class="form-group">
          <label>
            <b>Priority</b>
          </label>
          <select class="form-control" onChange={PriorityChangeHandler}>
            {priority.map((row) => {
              return <option value={row._id}>{row.priorityName}</option>;
            })}
          </select>
          {priorityid}
        </div>
        <div class="form-group">
          <label>
            <b>User</b>
          </label>
          <select class="form-control" onChange={UserChangeHandler}>
            {user.map((row) => {
              if (row.role._id == "624c7737efbeec19caf8e4ff") {
                return <option value={row._id}>{row.firstname}</option>;
              }
            })}
          </select>
          {userid}
        </div>
        <div class="form-group">
          <label>
            <b>Status</b>
          </label>
          <select class="form-control" onChange={StatusChangehandler}>
            {status.map((row) => {
              return <option value={row._id}>{row.statusname}</option>;
            })}
          </select>
          {userid}
        </div>

        <div class="form-group">
          <label>
            <b>Description</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Description"
            onChange={(e) => {
              DescriptionChangeHandler(e);
            }}
          />
        </div>
        <div class="form-group">
          <label>
            <b>StartDate</b>
          </label>
          <input
            type="date"
            class="form-control"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => {
              StartDateChangeHandler(e);
            }}
          />
        </div>
        <div class="form-group">
          <label>
            <b>EndDate</b>
          </label>
          <input
            type="date"
            class="form-control"
            id="exampleInputPassword1"
            placeholder=""
            onChange={(e) => {
              EndDateChangeHandler(e);
            }}
          />
        </div>
        <div class="form-group">
          <label>
            <b>TotalHours</b>
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Estimated Hours"
            onChange={(e) => {
              TotalHoursChangeHandler(e);
            }}
          />
        </div>
        <div class="form-group">
          <label>
            <b>UtilisedHours</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter utilisedhours"
            onChange={(e) => {
              UtilisedHoursChangeHandler(e);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <ToastContainer
          position="top-center"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};
