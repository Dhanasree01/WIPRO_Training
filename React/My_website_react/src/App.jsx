import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/employees">Employees</Link> | 
        <Link to="/courses">Courses</Link> | 
        <Link to="/admin">Admin</Link> | 
        <Link to="/login">Login</Link>
      </nav>

      <AnimatedRoutes />
    </>
  )
}

export default App
