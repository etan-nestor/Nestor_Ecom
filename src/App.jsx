import React, { useEffect } from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/TopProducts/TopProducts'
import Barner from './components/Barner/Barner'


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
        <div>
            <Navbar />
            <Hero />
            <Products />
            <TopProducts />
            <Barner />
            <Subscribe />
        </div>
    )
}

export default App
