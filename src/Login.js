import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Login() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
export default Login;
