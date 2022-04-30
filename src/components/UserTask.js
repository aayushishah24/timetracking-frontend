import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SidebarComponent } from './SidebarComponent';

export const UserTask = () => {
  var id = useParams().id;
  var navigate=useNavigate()
  const [developerdata,setdeveloperdata] = useState([])

  var data=[
    {
      "TaskName":"Login",
      "Description":"fghjk",
      "StartDate":"23-02-2022",
      "EndDate":"24-06-2022",
      "Totalhours":"23",
      "Utilisedhours":"40",
      "Project":"amazon",
      "Module":"hsgn",
      "Priority":"bjkh",
      "Status":"asfhjdhlk",
      "User":"bjllm"
    }
  ]
  const fetchDeveloperData=()=>{
    axios.get("http://localhost:4000/user_task").then(res=>{
      setdeveloperdata(res.data.data)
      console.log("afdsgdh",developerdata)
    })
  }

  useEffect(()=>{
    fetchDeveloperData()
    return()=>{

    }
  },[])

  const logout = async(e)=>{
    e.preventDefault()
    localStorage.removeItem("email")
    localStorage.removeItem("firstName")
    localStorage.removeItem("role")
    await navigate("/")
  }
  
   var rows = data.map(function(row){
     return<tbody>
       { 
      //  developerdata.user.firstName != null ?
         developerdata.map((row)=>{
          const pending = async(e)=>{
            e.preventDefault()
            var data={
              task:row.task._id
            }
            await axios.post(`http://localhost:4000/status`,data).then(res=>{
              console.log(res.data.data);
            })
          }
         
          if(localStorage.getItem("firstName")===row.user.firstName){

          
           
             return(

               <tr>
         <td>{row.task.taskName}</td>
			   <td>{row.task.description}</td>
			   <td>{row.task.startDate}</td>
			   <td>{row.task.endDate}</td>
			   <td>{row.task.totalHours}</td>
			   <td>{row.task.utilizedHours}</td>

         <td>
         <p>
								<button type="button" class="btn btn-danger" onClick={pending}>Pending</button> <button  class="btn btn-primary">In Progress</button>  <button  class="btn btn-success">Done</button>
								 </p>	
         </td>
               </tr>
             )
           }
         
         })
        // :"no"
      }
     </tbody>
   })  
  return (

    <div>
        <div className="wrapper">
        <SidebarComponent/>
      <div class="main">


        <nav class="navbar navbar-expand navbar-light navbar-bg">
          <a class="sidebar-toggle js-sidebar-toggle">
            <i class="hamburger align-self-center"></i>
          </a>
          <div class="navbar-collapse collapse">
          <ul class="navbar-nav navbar-align"> <svg xmlns="http://www.w3.org/2000/svg" onClick={logout} width="22" height="22" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
								<button type='button' class="button" onClick={logout}><h4>LOGOUT</h4></button>
							</ul>
          </div>
        </nav>
        <main class="content">
          <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>My Tasks</strong></h1> <br></br>
          <div class="row">
								<div class="col-12 col-lg-12 col-xxl-12 d-flex">
								<div class="card flex-fill">
										<table class="table table-hover my-0" id='table'>
											<thead>
												<tr>
													
													<th>TaskName</th>
													<th>Description</th>
													<th>StartDate</th>
													<th>EndDate</th>
													<th>TotalHours</th>
													<th>UtilisedHours</th>
													<th>Status</th>
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
                  <a class="text-muted" href="https://adminkit.io/"
                    target="_blank"><strong>TimeTracking</strong></a> &copy;
                </p>
              </div>
              <div class="col-6 text-end">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a class="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  )
}
