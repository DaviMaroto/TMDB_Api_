import './App.css'
import { Link, Outlet } from 'react-router-dom'
function App() {

  return (
  <div className="App">
    <nav id='navbar'>
      <h2>
      <Link to="/">MoviesLibs</Link>
      </h2>
      <Link to="/movie/1">Movie</Link>
      <Link to="/search">Search</Link>
    <Outlet/>
    </nav>
    <h2>Movies</h2>
  </div>
  )
}

export default App
