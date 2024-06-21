import Hero from '../components/Hero/Hero';
import TopProducts from '../components/TopProducts/TopProducts';
import Subscribe from '../components/SubScribe/Subscribe';
import Products from '../components/Products/Products';
import Testimonials from '../components/Testimonials/Testimonials';
import Barner from '../components/Barner/Barner';

import BarnerImg from '../assets/autres/other9.png';


const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <Subscribe />
      <Products />
      <Barner
      img={BarnerImg}
      title="An Eco-Friendly Online Store"
      subtitle="Explore a curated selection of sustainable, eco-conscious, and ethical products for a greener future."/>
      <Testimonials />
    </div>
  )
}

export default Home
