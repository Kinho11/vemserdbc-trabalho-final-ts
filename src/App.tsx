import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Inicial } from './pages/Inicial/Inicial';
import { Profile } from './pages/Profile/Profile';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
          <Route path='/perfil/:username' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
