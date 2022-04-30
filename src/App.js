import logo from './logo.svg';
import './App.css';
import './css/app.css';
import './css/app.css.map'
import { Dashboard } from './components/Dashboard';
import {Routes,Route} from 'react-router-dom'
import { Priority } from './components/Priority';
import { ProjectModules } from './components/ProjectModules';
import { Projects } from './components/Projects';
import { Roles } from './components/Roles';
import { Status } from './components/Status';
import { ProjectTeam } from './components/ProjectTeam';
import { Tasks } from './components/Tasks';
import { Users } from './components/Users';
import { UserTask } from './components/UserTask';
import { Form } from './components/Form';
import { UpdateProject } from './components/UpdateProject';
import { Login } from './components/Login';
import { ModuleForm } from './components/ModuleForm';
import { UpdateModule } from './components/UpdateModule';
import { TaskForm } from './components/TaskForm';
import { TaskUpdate } from './components/TaskUpdate';
import { Team } from './components/Team';
function App() {
  return (
    <div>
   
    <Routes>
            <Route path = '' element={<Login/>}></Route>
           <Route path = '/Dashboard' element ={<Dashboard/>}></Route>
           <Route path = '/Priority' element ={<Priority/>}></Route>
           <Route path = '/Project-Module/:id' element ={<ProjectModules/>}></Route>
           <Route path = '/Projects' element={<Projects/>}></Route>
           <Route path ='/Roles' element = {<Roles/>}></Route>
           <Route path = '/Status' element = {<Status/>}></Route>
           <Route path = '/Project-Team' element = {<ProjectTeam/>}></Route>
           <Route path = '/Task/:id' element ={<Tasks/>}></Route>
           <Route path = '/Users' element ={<Users/>}></Route>
           <Route path = '/User-Tasks' element ={<UserTask/>}></Route>
           <Route path = '/Form' element ={<Form/>}></Route>
           <Route path = 'Dashboard/update/:id' element={<UpdateProject/>}></Route>
           <Route path="/login" element = {<Login/>}></Route>
           <Route path = '/ModuleForm' element={<ModuleForm/>}></Route>
           <Route path = '/Project-Module/:id/update/:id1' element={<UpdateModule/>}></Route>
           <Route path = '/TaskForm' element = {<TaskForm/>}></Route>
           <Route path = '/Task/:id/updatetask/:id' element={<TaskUpdate/>}></Route>
           <Route path = '/Task/:id/Users/:id' element={<Users/>}></Route>
           <Route path = '/Team/:id' element={<Team/>}></Route>
           
               </Routes>
    </div>
  );
}


export default App;
