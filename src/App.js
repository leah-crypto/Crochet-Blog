// import Topbar from "./topbar/Topbar";
import Topbar from './topbar/Topbar'
import Home from "./pages/home/Home";
import Single from './pages/home/single/Single';
import Write from './write/Write';
import Settings from './pages/home/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
   <Topbar/>
   <Register />
  </>
  );
}

export default App;
