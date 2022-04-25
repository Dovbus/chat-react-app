import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, setError } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  dispatch(setError(null));

  function handleRegister(email, password) {
    console.log(vite);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        dispatch(setError(error.code));
      });
  }

  return <Form title="Sign Up" handleFormSubmit={handleRegister} />;
}
export default SignUp;
