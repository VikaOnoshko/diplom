import { auth } from '@providers/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const AuthService = {
  signin(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        return user;
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/invalid-login-credentials':
            throw {
              email: 'Неверный email или пароль',
            };
          default:
            throw {
              email: 'Ошибка',
            };
        }
      });
  },
  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        return user;
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/email-already-in-use':
            throw {
              email: 'Электронная почта уже используется',
            };
          default:
            throw {
              email: 'Ошибка',
            };
        }
      });
  },
};
