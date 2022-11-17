import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import DashBoard from './pages/dashboard/DashBoard';
import ErrorPage from './pages/error/ErrorPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';



function AppRoutingFinal() {


  let logged = false

  return (
    <div>

      {logged ? (<Link to='/dashboard'>| Dashboard |</Link>) : null}
      {logged ? (<Link to='/profile'>| Profile |</Link>) : null}

      <Routes>
        {/* Control de rutas con logging */}
        <Route exact path='/' element={logged ? <Navigate to='/dashboard' /> : <Navigate to='/login' />} />

        {/* Rutas */}
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/dashboard' element={logged ? <DashBoard /> : <Navigate to='/login' />} />
        <Route exact path='/profile' element={logged ? <ProfilePage /> : <Navigate to='/login' />} />
        <Route exact path='tasks' element={<TaskPage />} />


        {/* Rutas para direcciones no validas */}
        <Route path='*' element={ErrorPage} />
      </Routes>
    </div>
  );
}

export default AppRoutingFinal;
