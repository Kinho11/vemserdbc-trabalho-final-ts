import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Inicial } from './pages/Inicial';
import { Profile } from './pages/Profile';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
          <Route path='/Profile' element={<Profile/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
