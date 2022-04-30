import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [ProjectName, setProject] = useState();
  const [Description, setDescription] = useState();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [EstimatedHours, setEstimatedHours] = useState();
  const [Technology, setTechnology] = useState();

  const ProjectChangeHandler = (e) => {
    setProject(e.target.value);
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
  const EstimatedHoursChangeHandler = (e) => {
    setEstimatedHours(e.target.value);
  };
  const TechnologyChangeHandler = (e) => {
    setTechnology(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    window.location.href = "http://localhost:3000/Dashboard";
    axios.post("http://localhost:4000/project", data).then((res) => {
      console.log(res.data.data);
    });
  };

  var data = {
    projectName: ProjectName,
    description: Description,
    startDate: StartDate,
    endDate: EndDate,
    estimatedHours: EstimatedHours,
    technology: Technology,
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div class="form-group">
          <label>
            <b>Project Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter ProjectName"
            onChange={(e) => {
              ProjectChangeHandler(e);
            }}
          />
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
            <b>EstimatedHours</b>
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter EstimatedHours"
            onChange={(e) => {
              EstimatedHoursChangeHandler(e);
            }}
          />
        </div>
        <div class="form-group">
          <label>
            <b>Technology</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Technology"
            onChange={(e) => {
              TechnologyChangeHandler(e);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
