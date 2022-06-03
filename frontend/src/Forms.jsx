import React from 'react'

import {Link, Outlet } from 'react-router-dom';
import { Login } from './Login';

export const Forms = () => {
  return (
    <div>
      <nav>
        <Link to="/loginregister/login">
          Login
        </Link>
        <Link to="/loginregister/register">
          Register
        </Link>
      </nav>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Forms />} />
      </Routes> */}

      <Outlet />
    </div>

  )
}
