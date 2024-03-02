import React, { useEffect } from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Barner from './components/Barner/Barner'
import Subscribe from './components/SubScribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'


const App = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:800,
            easing:"ease-in-sine",
            delay:100,
        });
        AOS.refresh();
    },[])
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Navbar />
            <Hero />
            <Products />
            <TopProducts />
            <Barner />
            <Subscribe />
            <Products />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
