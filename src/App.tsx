import { Outlet } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <>
      <Routes />
      <Outlet />
    </>
  );
}

export default App;
