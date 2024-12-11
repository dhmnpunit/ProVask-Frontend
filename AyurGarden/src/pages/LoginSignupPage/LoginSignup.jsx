import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from '../../components/Header';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Header/>
      <div className='mt-16'>
        {isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignupForm toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default LoginSignup;