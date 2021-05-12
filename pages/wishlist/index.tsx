import MainComponent from '../../components/shared/MainComponent';
import BlueBackground from '../../components/shared/BlueBackground';

import { Col, Row, Badge } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import product_styles from '../product/styles.module.css';
import StyledButton from '../../components/shared/StyledButton';

import Menu from '../../components/Storefront/Menu';

import useSwr from 'swr';
import WishlistService from '../../services/wishlist';

import { toast } from 'react-toastify';

import WishItem from '../../components/Storefront/WishItem';

import styles from './styles.module.css';

const Wishlist: React.FC = () => {
  const { data, error, mutate } = useSwr('/storefront/v1/wish_items', WishlistService.index)

  if (error) toast.error(error)

  const handleWishlistItemRemoval = async (productId: number): Promise<void> => {
    try {
      await WishlistService.remove(productId);
      toast.info('Item removido da sua lista de desejos!');
      mutate();
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <MainComponent>
      <Menu tab="desired_games" />
      {
        data?.wish_items?.map(
          wish_item =>
            <WishItem
              key={wish_item.id}
              wishItem={wish_item}
              handleWishlistItemRemoval={handleWishlistItemRemoval}
            />
        )
      }
    </MainComponent>
  )
}

export default Wishlist;
