import PeripheralsHero from "../components/Hero/PeripheralsHero";
import Subscribe from "../components/SubScribe/Subscribe";
import Barner from "../components/Barner/Barner";
import PeripheralsProducts1 from "../components/Products/PeripheralsProducts1"
import PeripheralsProducts2 from "../components/Products/PeripheralsProducts2"

import BarnerImg from '../assets/Barner/barn1.png';
import EmailingPeripherals from "../components/SubScribe/EmailingPeripherals";

const Peripherals = () => {
  return (
    <>
      <div className="relative overflow-hidden min-h-[750px] sm:min-h-[800px] bg-blue-400 flex justify-center items-center dark:bg-gray-700 dark:text-white duration-200 pt-[6em] mb-[5em]">
        <PeripheralsHero />
      </div>
      <PeripheralsProducts1 />
      <Subscribe />
      <PeripheralsProducts2 />
      <Barner
      img={BarnerImg}
      title="Flexible Pricing for Every Shopper"
      subtitle="Enjoy the freedom to negotiate prices and find the best deals tailored just for you."/>
      <EmailingPeripherals />
    </>
  )
}

export default Peripherals
