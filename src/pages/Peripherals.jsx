import PeripheralsHero from "../components/Hero/PeripheralsHero"
import PeripheralsProducts1 from "../components/Products/PeripheralsProducts1"


const Peripherals = () => {
  return (
    <>
      <div className="relative overflow-hidden min-h-[750px] sm:min-h-[750px] bg-blue-400 flex justify-center items-center dark:bg-gray-700 dark:text-white duration-200 pt-[6em] mb-[5em]">
        <PeripheralsHero />
      </div>
      <PeripheralsProducts1 />
    </>
  )
}

export default Peripherals
