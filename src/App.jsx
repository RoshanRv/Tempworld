import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Form from "./templates/Form/Form"

function App() {
    return (
        <Router>
            <div className="font-disp">
                <Routes>
                    <Route path="/login" element={<Form />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
