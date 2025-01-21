import './App.css'
import AdminLayout from './layout/AdminLayout'
import MainLayout from './layout/MainLayout'
import AddProducts from './pages/AddProducts'
import DetailsPage from './pages/DetailsPage'
import HomePage from './pages/HomePage'
import NoPage from './pages/NoPage'
import WishlistPage from './pages/WishlistPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
function App() {

  return (
    <>
     <HelmetProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="details/:id" element={<DetailsPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AddProducts />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
