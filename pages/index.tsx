import MainComponent from '../components/shared/MainComponent';
import { Carousel } from 'react-bootstrap';
import styles from './styles.module.css';
import HighlightedProducts from '../components/Storefront/HighlightedProducts';
import { toast } from 'react-toastify'
import HomeIndexData from '../dtos/HomeIndexData';

import useSwr from 'swr'
import HomeService from '../services/home'

import { useRouter } from 'next/router';

interface StoreFrontProps {
  products: HomeIndexData;
}

const Storefront: React.FC<StoreFrontProps> = ({ products }) => {
  const { data, error } = useSwr(
    '/storefront/v1/home',
    HomeService.index, { initialData: products }
  );

  const { featured, last_releases, cheapest } = data

  const router = useRouter();

  if (error) {
    toast.error(error)
  }

  return (
    <MainComponent>
      <Carousel className={styles.carousel}>
        {
          featured?.slice(0, 3)?.map(
            product => (
              <Carousel.Item
                key={product.id}
                onClick={() => router.push(`/product/${product.id}`)}
                className={styles.carousel_item}
              >
                <img
                  className={`d-block w-100 ${styles.carousel_image}`}
                  src={product.image_url}
                  alt={product.name}
                />
              </Carousel.Item>
            )
          )
        }
      </Carousel>

      <HighlightedProducts
        title="Ofertas da Semana"
        type="highlighted"
        products={cheapest}
        handleSeeMore={
          () => router.push({
            pathname: '/search',
            query: {
              order: 'price',
              direction: 'asc'
            }
          })
        }
      />

      <HighlightedProducts
        title="Lançamentos"
        products={last_releases}
        handleSeeMore={
          () => router.push({
            pathname: '/search',
            query: {
              order: 'release_date',
              direction: 'desc'
            }
          })
        }
      />

      <HighlightedProducts
        title="Mais Populares"
        products={featured}
        handleSeeMore={
          () => router.push({
            pathname: '/search',
          })
        }
      />
    </MainComponent>
  )
}

export async function getStaticProps(context) {
  const products = await HomeService.index('/storefront/v1/home');
  return { props: { products } }
}

export default Storefront;
