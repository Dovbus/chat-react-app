import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/authSlice';
import Form from './Form';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate('/');
      })
      .catch(alert('Invalid user'));
  }

  return <Form title="sign in" handleFormSubmit={handleLogin} />;
}

export default Login;
