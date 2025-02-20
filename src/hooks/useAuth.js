import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectUser,
  selectToken,
  selectIsRefreshing
} from '../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    user: user || { email: '', name: '' },
    isLoggedIn: isLoggedIn || false,
    error: error || null,
    token: token || null,
    isRefreshing: isRefreshing || false,
    isAuthenticated: isLoggedIn && !!token,
    isLoading: isRefreshing || (!isLoggedIn && !error)
  };
};