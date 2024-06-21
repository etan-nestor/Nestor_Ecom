import EquipmentsHero from "../components/Hero/EquipmentsHero";
import CalltoBuy from "../components/Barner/CalltoBuy";
import Subscribe from "../components/SubScribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import Statistic1 from "../components/Statistics/Statistic1";
import PeripheralsProducts1 from "../components/Products/PeripheralsProducts1";

const Equipements = () => {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[750px] sm:min-h-[800px] bg-blue-400 flex justify-center items-center dark:bg-gray-700 dark:text-white duration-200 pt-[6em] mb-[5em]">
        <EquipmentsHero />
      </div>
      <div className="mb-[3em]">
      <Statistic1 />
      </div>
      <PeripheralsProducts1 />
      <Subscribe />
      <div>
        <CalltoBuy />
      </div>
      <Testimonials />
    </div>
  )
}

export default Equipements
