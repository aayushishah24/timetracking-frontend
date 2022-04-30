import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'



export const ProjectModules = () => {
 var id = useParams().id
 var navigate = useNavigate()

  //const [moduleData,setmoduleData]=useState=useState([])
  const [moduleData, setmoduleData] = useState([])

  var data=[
    {
      "ModuleName":"Flipcart",
      "Project":"project",
      "StartData":"10-02-2021",
      "EndDate":"3-05-2023",
      "EstimatedHours":"45",
      "UtilizedHours":"22"
    }
  ]

  const fetchmoduleData = ()=>{
    axios.get("http://localhost:4000/project_module").then(res=>{
      setmoduleData(res.data.data)
    })
  }
  useEffect(() =>{
    fetchmoduleData()
    return() => {

    }
  })
  const Logout = async (e)=>{
    e.preventDefault()
    localStorage.removeItem("email")
    localStorage.removeItem("firstName")
    localStorage.removeItem("role")
    await navigate("/")
  }


  var rows = data.map(function(row){
    return <tbody>
      {
        moduleData.map((row) => {
          if(id==row.project._id){
          
            const update = (e) =>{
              e.preventDefault()
              navigate(`update/${row._id}`)
            }
            const button = (e)=>{
              e.preventDefault()
              navigate(`/Task/${row._id}`)
            }
            return(
              <tr>
                
                <td><button type="button" onClick={button}>{row.moduleName}</button></td>
                <td><button type="button" onClick={button}>{row.startDate}</button></td>
                <td><button type="button" onclick={button}>{row.endDate}</button></td>
                <td><button type ="button" onclick={button}>{row.estimatedHours}</button></td>
                <td><button type = "button" onclick={button}>{row.utilizedHours}</button></td>
                 <td>
                   <button type ="button" onClick={()=>{deleteData(row._id)}} class="btn btn-warning">
                     DELETE
                   </button>
                   <br></br>
                   <br></br>
                   <button type="button" onclick={update} class="btn btn-info">
                     UPDATE
                     </button>
                 </td>
              </tr>

                     
            )
           
          }
        })
      }
    </tbody>
  })

  const deleteData =(id)=>{
    axios.delete(`http://localhost:4000/project_module/${id}`).then(res=>{
      if(res.status==200){
        alert((res.data.data))
      }
    })
  }
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
              <Link class="sidebar-link" to="/Roles">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
                                        <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                                    </svg> <span class="align-middle">Roles</span>
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
              <Link class="sidebar-link" to="/Projects">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg> <span class="align-middle">Projects</span>
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
          <ul class="navbar-nav navbar-align">
            
          <svg xmlns="http://www.w3.org/2000/svg" onClick={Logout} width="22" height="22" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
</svg> 
            <button type='button' class="hii" onClick={Logout}>
            
              <h4>
                LOGOUT
              </h4>
            </button>
            </ul>
          </div>
        </nav>
        
        
        <main class="content">
          
          <div class="container-fluid p-0">
            <Link to ='/ModuleForm' class='tag' target='_self'>Add Module</Link>
             
             <h1 class="h3 mb-3"><strong>Modules-List</strong></h1>
           <div class="row">
           <div class="col-12 col-lg-12 col-xxl-12 d-flex">
            <div class = "card flex-fill">

              <table class="table table-hover my-0" id='table'>
                <thead>
                  <tr>
                    <th>moduleName</th>
                    <th>startDate</th>
                    <th>endDate</th>
                    <th>estimatedHours</th>
                    <th>utilizedHours</th>
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
