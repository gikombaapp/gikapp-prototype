// import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthForm from './pages/Auth'
import Profile from './pages/Profile'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { useAuthStore } from "./stores/authStore";
import { useEffect } from 'react'

function App() {
  const { initAuth, subscribeAuth } = useAuthStore();
   useEffect(() => {
    initAuth();
    const unsubscribe = subscribeAuth();
    return unsubscribe;
  }, []);


  return (
    <>
        <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<AuthForm/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
