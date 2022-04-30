import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarComponent } from "./SidebarComponent";

export const Projects = () => {
  const [projectdata, setprojectdata] = useState([]);
  var navigate = useNavigate();

  var Table = [
    {
      ProjectName: "timemanagement",
      Description: "to track time",
      StartDate: "12-03-2021",
      EndDate: "14-2-2024",
      EstimatedHours: "450",
      Technology: "Python",
    },
  ];
  const fetchprojectsdata = () => {
    axios.get("http://localhost:4000/project").then((res) => {
      setprojectdata(res.data.data);
    });
  };
  useEffect(() => {
    fetchprojectsdata();
    return () => {};
  });

  const logout = async (e) => {
    e.preventDefault();

    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("role");
    await navigate("/");
  };

  var Project = Table.map(function (row) {
    return (
      <tbody>
        {projectdata.map((row) => {
          const update = (e) => {
            e.preventDefault();
            navigate(`update/${row._id}`);
          };
          const button = (e) => {
            e.preventDefault();
            navigate(`/ProjectModules/${row._id}`);
          };
          return (
            <tr>
              <td>
                <button onClick={button}>{row.projectName}</button>
              </td>
              <td>
                <button onClick={button}>{row.description}</button>
              </td>
              <td>
                <button onClick={button}>{row.startDate}</button>
              </td>
              <td>
                <button onClick={button}>{row.endDate}</button>
              </td>
              <td>
                <button onClick={button}>{row.estimatedHours}</button>
              </td>
              <td>
                <button onClick={button}>{row.technology}</button>
              </td>
              <td>
                <p>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => {
                      deleteData(row._id);
                    }}
                  >
                    DELETE
                  </button>{" "}
                  <button type="button" class="btn btn-info">
                    UPDATE
                  </button>{" "}
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  });
  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/project/${id}`).then((res) => {
      if (res.status == 200) {
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <div className="wrapper">
        <SidebarComponent />
        <div class="main">
          <nav class="navbar navbar-expand navbar-light navbar-bg">
            <a class="sidebar-toggle js-sidebar-toggle">
              <i class="hamburger align-self-center"></i>
            </a>
            <div class="navbar-collapse collapse">
              <ul class="navbar-nav navbar-align">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={logout}
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-box-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                  />
                </svg>
                <button type="button" class="button" onClick={logout}>
                  <h4>LOGOUT</h4>
                </button>
              </ul>
            </div>
          </nav>
          <main class="content">
            <div class="container-fluid p-0">
              <Link to="/Form" class="tag">
                Add Project{" "}
              </Link>
              <h1 class="h3 mb-3">
                <strong>Project-List</strong>
              </h1>{" "}
              <br></br>
              <div class="row">
                <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                  <div class="card flex-fill">
                    <table class="table table-hover my-0" id="table">
                      <thead>
                        <tr>
                          <th>ProjectName</th>
                          <th>Description</th>
                          <th>StartDate</th>
                          <th>EndDate</th>
                          <th>EstimatedHours</th>
                          <th>Technology</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {Project}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer class="footer">
            <div class="container-fluid">
              <div class="row text-muted">
                <div class="col-6 text-start">
                  <p class="mb-0">
                    <a
                      class="text-muted"
                      href="https://adminkit.io/"
                      target="_blank"
                    >
                      <strong>TimeTracking</strong>
                    </a>{" "}
                    &copy;
                  </p>
                </div>
                <div class="col-6 text-end">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Support
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Help Center
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Privacy
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
