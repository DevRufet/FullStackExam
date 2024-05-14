import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainsLayout from './pages/Main/MainsLayout/MainsLayout';
import HomePage from './pages/Main/HomePage/HomePage';
import DetailPage from './pages/Main/DetailPage/DetailPage';
import BasketPage from './pages/Main/BasketPage/BasketPage';
import WishList from './pages/Main/WishListPage/WishList';
import MainLayout from './pages/Admin/MainLayout/MainLayout';
import Admin from './pages/Admin/AdminPage/Admin';
import AdminAdd from './pages/Admin/AdminAdd/AdminAdd';
import AdminUpdate from './pages/Admin/AdminUpdate/AdminUpdate';
import MainProvider from './context/MainProvider';
function App() {
 

  return (
    <>
    <MainProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainsLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Admin />} />
          <Route path="/admin/add" element={<AdminAdd />} />
          <Route path="/admin/update/:id" element={<AdminUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
