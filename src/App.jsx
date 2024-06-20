import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Peripherals from './pages/Peripherals';
import Equipements from './pages/Equipements';
import Hardware from './pages/Hardware';
import Support from './pages/Support';
import Mice from './pages/Mice';
import Keyboard from './pages/Keyboard';
import Laser from './pages/Laser';


const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, [])
    return (
        <Router>
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/peripherals' element={<Peripherals />} />
                    <Route path='/equipments' element={<Equipements />} />
                    <Route path='/hardwares' element={<Hardware />} />
                    <Route path='/supports' element={<Support />} />
                    <Route path='/laser' element={<Laser />} />
                    <Route path='/mice' element={<Mice />} />
                    <Route path='/keyboard' element={<Keyboard />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
