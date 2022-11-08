import './App.css';
import './Styles/general.css'
import HomeView from './Views/HomeView';
import MenuView from './Views/MenuView';
import NavBarComponent from './Components/NavBarComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
            <Routes>
              <Route path="/" element ={<NavBarComponent/>}>
                <Route index element={<HomeView />}/>
                <Route path="Menu" element={<MenuView/>}/>
  
              </Route>
            </Routes>
            </BrowserRouter>
  </div>
  );
}

export default App;
