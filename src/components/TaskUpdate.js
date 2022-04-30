import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const TaskUpdate = () => {
    var id = useParams().id;
    var id1 = useParams().id1
       
    var navigate = useNavigate()

    const [data, setdata] = useState('')
    const [taskName, settaskName] = useState(data.taskName)
    const [description, setdescription] = useState(data.description)
    const [startDate, setstartDate] = useState(data.startDate)
    const [endDate, setendDate] = useState(data.endDate)
    const [totalHours, settotalHours] = useState(data.totalHours)
    const [utilizedHours, setutilizedHours] = useState(data.utilizedHours)

    const updateData = () => {
        axios.get(`http://localhost:4000/task/${id}`).then(res => {
            setdata(res.data.data)
          
            console.log(res.data.data)
        })
    }
    useEffect(()=>{
        updateData()
    },[])   
    const update=(e)=>{
        var updateData = {
            taskName:taskName,
            description:description,
            startDate:startDate,
            endDate:endDate,
            totalHours:totalHours,
            utilizedHours:utilizedHours,
            TaskId:id
        }
        e.preventDefault()
        axios.put(`http://localhost:4000/task`,updateData).then(res=>{
            console.log(res.data.data);

        })
        navigate(`/Task/${id}`)
    } 
      
    
  return (
    <div>
       
       <form onSubmit={update} >
                <div class="form-group">
                    <label ><b>Task Name</b></label>
                    <input type="text" class="form-control" id="exampleInputEmail1" defaultValue={data.taskName} 
                    onChange={(e) => settaskName(e.target.value)} />

                </div>
                <div class="form-group">
                    <label ><b>Description</b></label>
                    <input type="text" class="form-control" id="exampleInputEmail1" defaultValue={data.description} 
                    onChange={(e) => setdescription(e.target.value)} />

                </div>
                <div class="form-group">
                    <label ><b>StartDate</b></label>
                    <input type="date" class="form-control" id="exampleInputPassword1" defaultValue={data.startDate} onChange={(e) => setstartDate(e.target.value)} />
                </div>
                <div class="form-group">
                    <label><b>EndDate</b></label>
                    <input type="date" class="form-control" id="exampleInputPassword1" defaultValue={data.endDate} onChange={(e) => setendDate(e.target.value)} />
                </div>
                <div class="form-group">
                    <label ><b>TotalHours</b></label>
                    <input type="number" class="form-control" id="exampleInputPassword1" defaultValue={data.totalHours} onChange={(e) => settotalHours(e.target.value)} />
                </div>
                <div class="form-group">
                    <label ><b>UtilizedHours</b></label>
                    <input type="text" class="form-control" id="exampleInputPassword1" defaultValue ={data.utilizedHours} onChange={(e) => setutilizedHours(e.target.value)} />
                </div>

                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
     
    </div>
  )
}
