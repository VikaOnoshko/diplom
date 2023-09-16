import './index.less';
import { SigninForm } from './signin';
import { useState, useEffect } from 'react';
import { SignupForm } from './signup';

type AuthProps = { close: () => void };

export const Auth = ({ close }: AuthProps) => {
  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const title = isSignin ? 'Вход' : 'Регистрация';
  const activeForm = isSignin ? (
    <SigninForm goToSignup={() => setIsSignin(false)} />
  ) : (
    <SignupForm />
  );

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__wrapper">
          <div className="auth__header">
            <div className="autn__navigation" onClick={() => setIsSignin(true)}>
              <div className="auth__icon">
                <div className="auth__arrow"></div>
              </div>
              <div className="auth__text">
                <span>Назад</span>
              </div>
            </div>
            <div className="auth__close" onClick={close}></div>
            <h2 className="auth__title">{title}</h2>
          </div>
          <div className="auth__main">{activeForm}</div>
        </div>
      </div>
    </div>
  );
};
