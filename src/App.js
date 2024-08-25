import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Homepage } from './Components';
import { useState } from 'react';

function App() {
  const [activeSide, setActiveSide] = useState(false);
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root activeSide={active => setActiveSide(active)}/>}>
      <Route index element={<Homepage activeSide={activeSide}/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
