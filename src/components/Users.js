import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SidebarComponent } from "./SidebarComponent";

export const Users = () => {
  var id = useParams().id;
  var navigate = useNavigate();
  const [developerdata, setdeveloperdata] = useState([]);

  var data = [
    {
      FirstName: "Login",
      Email: "To track time",
    },
  ];

  const fetchDeveloperData = () => {
    axios.get("http://localhost:4000/user").then((res) => {
      setdeveloperdata(res.data.data);
    });
  };
  useEffect(() => {
    fetchDeveloperData();

    return () => {};
  }, []);

  const logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("role");
    await navigate("/");
  };

  var rows = data.map(function (row) {
    return (
      <tbody>
        {developerdata.map((row) => {
          const addtask = (e) => {
            e.preventDefault();
            var data = {
              user: row._id,
              task: id,
            };
            axios.post(`http://localhost:4000/user_task`, data).then((res) => {
              console.log(res.data.data);
            });
          };
          if (row.role._id === "6253bbf7a71f07f26f6fc599") {
            return (
              <tr>
                <td>
                  <Link to="">{row.firstName}</Link>
                </td>
                <td>
                  <Link to="">{row.email}</Link>
                </td>

                <td>
                  <Link to="" onClick={addtask}>
                    Add Task
                  </Link>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    );
  });
  return (
    <div>
      <div className="wrapper">
        <SidebarComponent />
        <div class="main">
          <nav class="navbar navbar-expand navbar-light navbar-bg">
            <a class="sidebar-toggle js-sidebar-toggle">
              <i class="hamburger align-self-center"></i>
            </a>
            <div class="navbar-collapse collapse"></div>
          </nav>
          <main class="content">
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                  <div class="card flex-fill">
                    <table class="table table-hover my-0" id="table">
                      <thead>
                        <tr>
                          <th>FirstName</th>

                          <th>Email</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      {rows}
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
