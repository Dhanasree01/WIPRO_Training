
import './App.css'
import { EmployeeService } from './services/EmployeeService'
import EmployeeList from "./components/EmployeeList"
import { ServiceContext } from './context/ServiceContext'
function App() {
  return (
    <>
      <div>
        {/* <EmployeeList service={EmployeeService}/> */}
        <ServiceContext.Provider value={EmployeeService}>
          <EmployeeList/>
        </ServiceContext.Provider>
       </div>
    </>
  )
}
export default App