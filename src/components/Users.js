import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Users = () => {
  var id = useParams().id;
  var navigate = useNavigate()
  const [developerdata,setdeveloperdata]=useState([])

  var data=[{
    "FirstName":"Login",
    "Email":"To track time"
  }]
   
  const fetchDeveloperData = ()=>{

    axios.get("http://localhost:4000/user").then(res=>{
      setdeveloperdata(res.data.data)
    })
  }
  useEffect(() => {
    fetchDeveloperData()
  
    return () => {
      
    }
  }, [])

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
        developerdata.map((row)=>{
          
          const addtask = (e)=>{
            e.preventDefault()
            var data={
              user:row._id,
              task:id
            }
            axios.post(`http://localhost:4000/user_task`,data).then(res=>{
                console.log(res.data.data);
            })
          }
          if(row.role._id==="6253bbf7a71f07f26f6fc599"){
            return(
             <tr>
               <td>
                 <Link to = "">
                   {row.firstName}
                 </Link>
               </td>
               <td><Link to="">{row.email}</Link></td>
			  
			   <td>
				   
				   <Link to="" onClick={addtask}>Add Task</Link>
			   </td>

             </tr>

            )

          }
        })
  }
    </tbody>
  })
  return (
    <div>
        <div className="wrapper">
      <nav id="sidebar" class="sidebar js-sidebar">
        <div class="sidebar-content js-simplebar">
          <a class="sidebar-brand" href="index.html">
            <span class="align-middle">TimeTracking</span>
          </a>

          <ul class="sidebar-nav">
            <li class="sidebar-header">
              List
            </li>
            <li class="sidebar-item active">
              <Link class="sidebar-link" to="/Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> <span class="align-middle">Dashboard</span>
              </Link>
            </li>
            
            <li class="sidebar-item">
              <Link class="sidebar-link" to="/Users">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> <span class="align-middle">Users</span>
              </Link>
            </li>
           

            <li class="sidebar-item">
              <Link class="sidebar-link" to="/Project-Team">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg> <span class="align-middle">Project-Team</span>
              </Link>
            </li>

           
            <li class="sidebar-item">
              <Link class="sidebar-link" to="/Status">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-diamond-fill" viewBox="0 0 16 16">
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM5.495 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
</svg> <span class="align-middle">Status</span>
              </Link>
            </li>
            
            <li class="sidebar-item">
              <Link class="sidebar-link" to="/User-Tasks">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-video2" viewBox="0 0 16 16">
  <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
  <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z"/>
</svg><span class="align-middle">User-Tasks</span>
              </Link>
            </li>
            <li class="sidebar-item">
              <Link class="sidebar-link" to="/Priority">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-exclamation-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> <span class="align-middle">Priority</span>
              </Link>
            </li>





          </ul>


        </div>
      </nav>
      <div class="main">


        <nav class="navbar navbar-expand navbar-light navbar-bg">
          <a class="sidebar-toggle js-sidebar-toggle">
            <i class="hamburger align-self-center"></i>
          </a>
          <div class="navbar-collapse collapse">
            
          </div>
        </nav>
        <main class="content">
          <div class="container-fluid p-0">
          <div class="row">
								<div class="col-12 col-lg-12 col-xxl-12 d-flex">
								<div class="card flex-fill">
										<table class="table table-hover my-0" id='table'>
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
