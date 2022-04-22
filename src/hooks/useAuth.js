import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id } = useSelector((state) => state.auth);
  console.log(email);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
