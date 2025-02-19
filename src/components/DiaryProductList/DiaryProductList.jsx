import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEntry } from '../../redux/entry/operations';
import DiaryProductListItem from '../DiaryProductListItem/DiaryProductListItem';

const DiaryProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {products.map(({ _id, product }) => (
        <DiaryProductListItem
          key={_id}
          _id={_id}
          product={product}
          onDelete={() => dispatch(deleteEntry(_id))}
        />
      ))}
    </div>
  );
};

DiaryProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        grams: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default DiaryProductList;