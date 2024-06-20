import Hero from '../components/Hero/Hero';
import TopProducts from '../components/TopProducts/TopProducts';
import Subscribe from '../components/SubScribe/Subscribe';
import Products from '../components/Products/Products';
import Barner from '../components/Barner/Barner';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <Subscribe />
      <Products />
      <Barner />
      <Testimonials />
    </div>
  )
}

export default Home
