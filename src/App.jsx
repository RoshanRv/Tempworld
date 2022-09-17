import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./templates/Footer/Footer"

import Form from "./templates/Form/Form"
import Navbar from "./templates/Navbar/Navbar"

function App() {
    return (
        <Router>
            <div className="font-disp">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Form />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
