import logo from './logo.svg';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Discover from './pages/discover/Discover';
import { MusicProvider } from './context/MusicContext';
import routes from './routes'
import sideBar from './component/sidebar/SideBar'
import 'bootstrap/dist/css/bootstrap.min.css';

 export default function App() {
  let router=useRoutes(routes)
  return (
  <>
    <MusicProvider>
    {router}
    <sideBar></sideBar>
      </MusicProvider> 
  
  </>
  );
}

