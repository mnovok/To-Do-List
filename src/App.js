import { Outlet } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { ToDoWrapper } from './components/ToDoWrapper';
import GlobalStyle from './styles/GlobalStyle';
import  Home  from './pages/Home';
import  About  from './pages/About';
import  Signup  from './pages/Signup';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
