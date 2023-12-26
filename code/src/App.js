import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration/Registation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Registation' element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
