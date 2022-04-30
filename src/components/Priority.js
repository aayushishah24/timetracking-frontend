import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarComponent } from "./SidebarComponent";

export const Priority = () => {
  const [prioritydata, setprioritydata] = useState([]);
  var navigate = useNavigate();

  var Table = [
    {
      TaskName: "timemanagement",
      ProjectName: "to track time",
      Priority: "high",
    },
  ];

  const fetchprioritydata = () => {
    axios.get("http://localhost:4000/priority").then((res) => {
      setprioritydata(res.data.data);
    });
  };
  useEffect(() => {
    fetchprioritydata();

    return () => {};
  });

  const logout = async (e) => {
    e.preventDefault();

    localStorage.removeItem("email");
    localStorage.removeItem("firstname");
    localStorage.removeItem("role");

    await navigate("/");
  };

  var Project = Table.map(function (row) {
    return (
      <tbody>
        {prioritydata.map((row) => {
          const getcolor = (priorityName) => {
            if (priorityName == "High") return "red";
            if (priorityName == "Medium") return "orange";
            if (priorityName == "Low") return "green";
          };

          return (
            <tr style={{ color: getcolor(row?.priorityName) }}>
              <td>
                <button>{row?.task?.taskName}</button>
              </td>
              <td>
                <button>{row?.project?.projectName}</button>
              </td>
              <td>{row?.priorityName}</td>
            </tr>
          );
        })}
      </tbody>
    );
  });

  return (
    <div>
      <div class="wrapper">
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
              <div class="row">
                <h2>Priority-List</h2>
                <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                  <div class="card flex-fill">
                    <table class="table table-hover my-0" id="table">
                      <thead>
                        <tr>
                          <th>TaskName</th>
                          <th>ProjectName</th>
                          <th>Priority</th>
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
