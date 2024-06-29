import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LayoutOne from './assets/Layouts/LayoutOne'
import DashboardPage from './Pages/DashboardPage'
import AnalyticsPage from './Pages/AnalyticsPage'
import InventoryPage from './Pages/InventoryPage'


function App() {
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<DashboardPage/>}/>
          <Route path='/analytics'  element={<AnalyticsPage/>}/>
          <Route path='/inventory'  element={<InventoryPage/>}/>
          <Route path='/notifications'  element={<InventoryPage/>}/>
          <Route path='/revenue'  element={DashboardPage}/>
        </Route>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={route}/>

      
    </>
  )
}

export default App
