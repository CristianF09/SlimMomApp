import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const register = (userData) => API.post('/api/auth/register', userData);
export const login = (credentials) => API.post('/api/auth/login', credentials);
export const refreshTokens = (refreshToken) => 
  API.post('/api/auth/refresh', { refreshToken });

// frontend/redux/authOperations.js
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await login(credentials);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    dispatch({ type: 'auth/loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'auth/loginError', payload: error.message });
  }
};