import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-form">
      <Link to="/signup" className='link'>← Go to Signup</Link>

      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email address:</label>
          <br />
          <input
            placeholder="email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="pwd">Password:</label>
          <br />
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <br />
        {error ? (
          <div>
            <p className="error-text">**The provided credentials are incorrect!</p>
          </div>
        ) : null}
        <br />

        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;