import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import React from 'react';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
