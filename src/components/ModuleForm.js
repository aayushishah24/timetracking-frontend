import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ModuleForm = () => {
    var navigate = useNavigate()
    var id = useParams().id1;
    const [ModuleName,setModuleName] = useState('')
    const [projectId, setprojectId] = useState('')
    const [Project,setProject]= useState([])
    const [StartDate,setStartDate] = useState('')
    const [EndDate,setEndDate] = useState('')
    const [EstimatedHours,setEstimatedHours] = useState('')
    const [UtilizedHours,setUtilizedHours] = useState('') 

    const getproject = async()=>{
        await axios.get("http://localhost:4000/project").then((res)=>{
            setProject(res.data.data)
            console.log(res.data.data);
        })
    }
    useEffect(()=>{
        getproject()
    }, [])
    const ModuleNameChangeHandler=(e)=>{
        setModuleName(e.target.value)
    }
    const ProjectChangeHandler=(e)=>{
        console.log(e.target.value)
       setprojectId(e.target.value)
    }
    const StartDataChangeHandler=(e)=>{
        setStartDate(e.target.value)
    }
    const EndDateChangeHandler=(e)=>{
        setEndDate(e.target.value)
    }
    const EstimatedHoursChangeHandler=(e)=>{
        setEstimatedHours(e.target.value)
    }
    const UtilizedHoursChangeHandler=(e)=>{
        setUtilizedHours(e.target.value)
    }

    const submit = async(e)=>{
        e.preventDefault()

       // window.location.href="http://localhost:3000/Project-Module/:id"
        await axios.post('http://localhost:4000/project_module',data).then(res=>{
            
            console.log(res.data.data);
        })
    }

    var data={
        moduleName:ModuleName,
        project:projectId,
        startDate:StartDate,
        endDate:EndDate,
        estimatedHours:EstimatedHours,
        utilizedHours:UtilizedHours
    }
  return (
    <div>
      <form onSubmit={submit}>
          <div class="form-group">
              <label>
                  <b>
                     ModuleName 
                  </b>

              </label>
              <input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='Enter ModuleName' onChange={(e)=>{ ModuleNameChangeHandler(e)}}/>
              

          </div>
           <div class="form-group">
               <label>
                   <b>
                       Project
                   </b>
               </label>
               <select class="form-control" onChange={ProjectChangeHandler}>
                   {
                       Project.map((row)=>{
                           return(
                               <option value={row._id}>{row.projectName}</option>
                           )
                       })
                   }

               </select>
               {projectId}
           </div>

          <div class="form-group">
    <label ><b>StartDate</b></label>
    <input type="date" class="form-control"  id="exampleInputPassword1" placeholder="" onChange={(e)=>{StartDataChangeHandler(e)}}/>
  </div>
  <div class="form-group">
    <label><b>EndDate</b></label>
    <input type="date" class="form-control"  id="exampleInputPassword1" placeholder="" onChange={(e)=>{EndDateChangeHandler(e)}}/>
  </div>
  <div class="form-group">
    <label ><b>EstimatedHours</b></label>
    <input type="number" class="form-control"  id="exampleInputPassword1" placeholder="Enter EstimatedHours" onChange={(e)=>{EstimatedHoursChangeHandler(e)}}/>
  </div>
  <div class="form-group">
      <label>
          <b>
              UtilizedHours
          </b>
          <input type="number" class="form-control"  id="exampleInputPassword1" placeholder="Enter EstimatedHours" onChange={(e)=>{UtilizedHoursChangeHandler(e)}}/>
      </label>


  </div>
  <button type="submit" class=" btn btn-primary">Submit</button>

      </form>

    </div>
  )
}
