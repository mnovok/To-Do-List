import { Outlet } from 'react-router-dom';
import '../App.css';
import { NavBar } from '../components/NavBar';
import { ToDoWrapper } from '../components/ToDoWrapper';
import GlobalStyle from '../styles/GlobalStyle';

function Home() {
  return (
    <div className="App">
     <ToDoWrapper/>
    </div>
  );
}

export default Home;
