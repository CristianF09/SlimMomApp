import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEntry } from '../../redux/entry/operations';
import { Icon, Item } from './DiaryProductListItem.styled';
import { ReactComponent as CrossIcon } from '../../images/svg/cross.svg';

export const DiaryProductListItem = ({ _id, product }) => {
  const { title, grams, calories } = product;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEntry(_id));
  };

  return (
    <Item>
      <p className="products-item-name">{title}</p>
      <p className="products-item-grams">{grams} g</p>
      <p className="products-item-calories">{calories} <span>kcal</span></p>
      <Icon onClick={handleDelete}>
        <CrossIcon />
      </Icon>
    </Item>
  );
};

DiaryProductListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    grams: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};