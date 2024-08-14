import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" elemen={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default Login;
