import { List } from './DiaryProductList.styled';  // Corrected import for styled components
import { useGetEntry } from '../../hooks/useGetEntry';
import { DiaryProductsListItem } from '../DiaryProductListItem/DiaryProductListItem';  // Fixed relative import

export const DiaryProductsList = () => {
  const { entry } = useGetEntry();

  return (
    <List>
      {entry
        .slice()
        .reverse()
        .map(product => {
          return (
            <DiaryProductsListItem
              key={product._id}
              _id={product._id}
              product={product.food}
            />
          );
        })}
    </List>
  );
};