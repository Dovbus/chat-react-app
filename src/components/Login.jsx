import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setUser, setError } from '../redux/authSlice';
import Form from './Form';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setError(null));
  const auth = getAuth();

  function handleLogin(email, password) {
    console.log(vite);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        dispatch(setError(null));
        navigate('/');
      })
      .catch((error) => {
        dispatch(setError(error.code));
      });
  }

  return <Form title="Sign In" handleFormSubmit={handleLogin} />;
}

export default Login;
