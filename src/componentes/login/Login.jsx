import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import LogiLoginCreate from '../loginCreate/LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset';

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LogiLoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
