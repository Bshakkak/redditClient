import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Homepage } from './Components';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Homepage />}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
