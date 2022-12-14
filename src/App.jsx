import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./templates/Footer/Footer"

import Form from "./templates/Form/Form"
import Navbar from "./templates/Navbar/Navbar"
import Slider from "./templates/Slider/Slider"
import MiniSlider from "./templates/MiniSlider/MiniSlider"
import Modal from "./templates/Modal/Modal"

function App() {
    return (
        <Router>
            <div className="font-disp">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Form />} />
                    <Route path="/slider" element={<Slider />} />
                    <Route path="/mini-slider" element={<MiniSlider />} />
                    <Route path="/modal" element={<Modal />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
