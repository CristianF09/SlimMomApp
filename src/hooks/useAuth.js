import { useSelector } from 'react-redux';
import { selectError, selectIsLoggedIn, selectUser } from '../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);

  // Add default values if necessary
  return { user: user || {}, isLoggedIn: isLoggedIn || false, error: error || null };
};