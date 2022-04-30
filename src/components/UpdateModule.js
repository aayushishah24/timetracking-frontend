import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateModule = () => {
    var id = useParams().id;
    
    var id1 = useParams().id1
    var navigate = useNavigate()

    const [data,setdata] = useState('')
    const [ModuleName,setModuleName] = useState(data.moduleName)
  
    const [StartDate,setStartDate] = useState(data.startDate)
    const [EndDate,setEndDate] = useState(data.endDate)
    const [EstimatedHours,setEstimatedHours] = useState(data.estimatedHours)
    const [UtilizedHours,setUtilizedHours] = useState(data.utilizedHours) 

    const updateData = ()=>{
        axios.get(`http://localhost:4000/module/${id1}`).then(res =>{
            setdata(res.data.data)
            console.log("res.data.data")
        })
    }
    useEffect(()=>{
        updateData()
    },[])

    const update =(e)=>{
        var updateData = {
            moduleName:ModuleName,
            startDate:StartDate,
            endDate:EndDate,
            estimatedHours:EstimatedHours,
            utilizedHours:UtilizedHours,
            ModuleId:id1,
        

        }
        e.preventDefault()
       // window.location.href=`http://localhost:3000/Projectmodule${data.project._id}`
        axios.put(`http://localhost:4000/project_module`,updateData).then(res =>{
            console.log(res.data.data);
        })
        // navigate(`/ProjectModules/${id}`)
    }
  return (
    <div>
         <form onSubmit={update}>
          <div class="form-group">
              <label>
                  <b>
                     ModuleName 
                  </b>

              </label>
              <input type="text" class="form-control" id="exampleInputEmail" defaultValue={data.moduleName} onChange={(e)=>setModuleName(e.target.value)}/>
              

          </div>
          

          <div class="form-group">
    <label ><b>StartDate</b></label>
    <input type="date" class="form-control"  defaultValue={data.startDate} onChange={(e)=>setStartDate(e.target.value)}/>
  </div>
  <div class="form-group">
    <label><b>EndDate</b></label>
    <input type="date" class="form-control"  defaultValue={data.endDate} onChange={(e)=>setEndDate(e.target.value)}/>
  </div>
  <div class="form-group">
    <label ><b>EstimatedHours</b></label>
    <input type="number" class="form-control" defaultValue={data.estimatedHours} onChange={(e)=>setEstimatedHours(e.target.value)}/>
  </div>
  <div class="form-group">
      <label>
          <b>
              UtilizedHours
          </b>
          <input type="number" class="form-control"  defaultValue={data.utilizedHours} onChange={(e)=>setUtilizedHours(e.target.value)}/>
      </label>


  </div>
  <button type="submit" class=" btn btn-primary">Submit</button>

      </form>

    </div>
  )
}
