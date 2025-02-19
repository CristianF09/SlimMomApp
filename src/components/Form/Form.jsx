import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box } from '../Box';  // Fixed import path
import { ButtonForm, ButtonWrapper, Checkbox, CheckboxContainer, Input, Label, List, Paragraph } from './Form.styled';
import { useDispatch } from 'react-redux';
import { caloriePrivate, caloriePublic } from '../../redux/calorie/operations';
import { useAuth } from '../../hooks/useAuth';  // Fixed import path

export const WeightForm = ({ isModalOpened, openModal, setUserParams, initialValues }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 554px)' });
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const [bloodType, setBloodType] = useState('1');
  const formRef = useRef();

  useEffect(() => {
    if (!isModalOpened) {
      formRef?.current?.reset();
    }
  }, [isModalOpened]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const data = {
      height: form.elements.height.value,
      age: form.elements.age.value,
      currentWeight: form.elements.currentWeight.value,
      desiredWeight: form.elements.desiredWeight.value,
      bloodType: form.elements.bloodType.value,
    };
    setUserParams(data);
    if (!data.height || !data.age || !data.currentWeight || !data.desiredWeight || !data.bloodType) {
      alert('Please fill in all the required fields.');
      return;
    }
    if (isLoggedIn) {
      dispatch(caloriePrivate(data));
    } else {
      dispatch(caloriePublic(data));
    }
    openModal(true);
  };

  return (
    <Box>
      <form ref={formRef} onSubmit={handleSubmit}>
        <List>
          <li
            style={
              isMobile
                ? null
                : {
                    gridColumnStart: '1',
                    gridColumnEnd: '1',
                    gridRowStart: '1',
                    gridRowEnd: '1',
                  }
            }
          >
            <label>
              <Input type="height" name="height" placeholder="Height, cm *" />
            </label>
          </li>

          <li
            style={
              isMobile
                ? null
                : {
                    gridColumnStart: '1',
                    gridColumnEnd: '1',
                    gridRowStart: '2',
                    gridRowEnd: '2',
                  }
            }
          >
            <label>
              <Input type="age" name="age" placeholder="Age *" />
            </label>
          </li>

          <li
            style={
              isMobile
                ? null
                : {
                    gridColumnStart: '1',
                    gridColumnEnd: '1',
                    gridRowStart: '3',
                    gridRowEnd: '3',
                    position: 'relative',
                    top: '-20px',
                  }
            }
          >
            <label>
              <Input
                type="currentWeight"
                name="currentWeight"
                placeholder="Current weight, kg *"
              />
            </label>
          </li>

          <li>
            <label>
              <Input
                type="desiredWeight"
                name="desiredWeight"
                placeholder="Desired weight, kg *"
              />
            </label>
          </li>

          <li>
            <Paragraph>Blood type *</Paragraph>
            <CheckboxContainer role="group" aria-labelledby="my-radio-group">
              <Label>
                <Checkbox
                  type="radio"
                  name="bloodType"
                  value="1"
                  checked={bloodType === '1'}
                  onChange={() => setBloodType('1')}
                />
                1
              </Label>
              <Label>
                <Checkbox
                  type="radio"
                  name="bloodType"
                  value="2"
                  checked={bloodType === '2'}
                  onChange={() => setBloodType('2')}
                />
                2
              </Label>
              <Label>
                <Checkbox
                  type="radio"
                  name="bloodType"
                  value="3"
                  checked={bloodType === '3'}
                  onChange={() => setBloodType('3')}
                />
                3
              </Label>
              <Label>
                <Checkbox
                  type="radio"
                  name="bloodType"
                  value="4"
                  checked={bloodType === '4'}
                  onChange={() => setBloodType('4')}
                />
                4
              </Label>
            </CheckboxContainer>
          </li>
        </List>
        <ButtonWrapper disabled={!initialValues}>
          <ButtonForm type="submit">Start losing weight</ButtonForm>
        </ButtonWrapper>
      </form>
    </Box>
  );
};