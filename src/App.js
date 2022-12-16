import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes , Redirect } from 'react-router-dom';
import Upload from './Upload';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Upload/>} />
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

