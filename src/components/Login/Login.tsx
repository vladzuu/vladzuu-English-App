import FacebookLogin from '@greatsumini/react-facebook-login';
import React from 'react';
import './login.css'

const Login = () => {

  return (
    <div className='login-form'>
      <FacebookLogin
        style={{
          backgroundColor: '#4267b2',
          color: '#fff',
          fontSize: '16px',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '4px',
        }}
        appId="560652529297166"
        onSuccess={(response) => {
          console.log('Login Success!', response);
        }}
        onFail={(error) => {
          console.log('Login Failed!', error);
        }}
        onProfileSuccess={(response) => {
          console.log('Get Profile Success!', response);
        }}
      />
    </div>
  );
};

export default Login;
