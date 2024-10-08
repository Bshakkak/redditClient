import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Homepage } from './Components';
import { useState } from 'react';

function App() {
  const [activeSide, setActiveSide] = useState(false);
  const [modeValue, setModeValue] = useState(()=> {
    let mode = localStorage.getItem('rcMode');
    return mode === 'dark' ? true : false;
  });

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root activeSide={active => setActiveSide(active)} 
    modeValue={mode => setModeValue(!mode)} mode={modeValue}/>}>
      <Route index element={<Homepage activeSide={activeSide} mode={modeValue} modeValue={mode => setModeValue(!mode)}/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
