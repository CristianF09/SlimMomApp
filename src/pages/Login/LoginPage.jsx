import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input, List } from '../../components/Form/Form.styled';
import { Button } from '../../components/Button/Button';
import { ButtonWrapper, H2, Wrapper, WrapperWithFruits } from '../../components/RegisterPage/RegisterPage.styled';
import { signin } from '../../redux/auth/operations';
import { routes } from '../../components/Routes/routes';
import TestLogin from '../../components/TestLogin/TestLogin';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    dispatch(signin({ email, password }));
    form.reset();
  };

  const handleClick = () => {
    navigate(routes.registration);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <WrapperWithFruits>
      <Wrapper style={{ paddingBottom: '255px' }}>
        <H2>Log In</H2>
        <form onSubmit={handleSubmit}>
          <List style={{ display: 'grid', gridTemplateColumns: 'revert' }}>
            <li>
              <label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  autoComplete="off"
                  required
                />
              </label>
            </li>

            <li>
              <label style={{ position: 'relative' }}>
                <Input
                  type={isShowPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password *"
                  maxLength="16"
                  required
                />
                {isShowPassword ? (
                  <AiFillEyeInvisible
                    onClick={handleShowPassword}
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '250px',
                      color: '#FC842D',
                      cursor: 'pointer'
                    }}
                  />
                ) : (
                  <AiFillEye
                    onClick={handleShowPassword}
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '250px',
                      color: '#FC842D',
                      cursor: 'pointer'
                    }}
                  />
                )}
              </label>
            </li>
          </List>
          <ButtonWrapper>
            <Button type="submit" full={true} style={{ width: '200px' }}>
              Log In
            </Button>
            <div onClick={handleClick}>
              <Button type="button" full={false}>
                Register
              </Button>
            </div>
          </ButtonWrapper>
        </form>

        {process.env.NODE_ENV === 'development' && <TestLogin />}
      </Wrapper>
    </WrapperWithFruits>
  );
};

export default LoginPage;