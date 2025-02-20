import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEntry } from '../../redux/entry/operations';
import DiaryProductListItem from '../DiaryProductListItem/DiaryProductListItem';

const DiaryProductList = ({ products = [] }) => {
  const dispatch = useDispatch();
  const [mergedProducts, setMergedProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!products.length) {
      setLoading(true);
      fetch('/data/products.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          return response.json();
        })
        .then(data => setMergedProducts(data || []))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [products]);

  if (loading) {
    return <p>Loading products...</p>; // You can replace this with a Loader component
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!mergedProducts.length) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {mergedProducts.map(({ _id, product }) => (
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
  ),
};

export default DiaryProductList;