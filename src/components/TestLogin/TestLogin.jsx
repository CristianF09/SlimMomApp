import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const TestLogin = () => {
  const dispatch = useDispatch();

  const handleTestLogin = () => {
    dispatch({ type: 'auth/testLogin', payload: 'user@example.com' });
  };

  return (
    <TestLoginContainer>
      <h3>Test User Access</h3>
      <TestButton onClick={handleTestLogin}>
        Login as user@example.com
      </TestButton>
      <WarningText>
        Note: This is for development purposes only. Remove in production!
      </WarningText>
    </TestLoginContainer>
  );
};

const TestLoginContainer = styled.div`
  padding: 2rem;
  border: 2px solid #f57c00;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 400px;
  text-align: center;
`;

const TestButton = styled.button`
  background-color: #f57c00;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e65100;
  }
`;

const WarningText = styled.p`
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 1rem;
`;

export default TestLogin;