import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration/Registation';
import Home from './Components/Registration/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
