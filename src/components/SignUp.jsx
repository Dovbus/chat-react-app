import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleRegister(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  }

  return <Form title="register" handleFormSubmit={handleRegister} />;
}
export default SignUp;
