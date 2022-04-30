import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { SidebarComponent } from './SidebarComponent';



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
      <SidebarComponent/>
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
