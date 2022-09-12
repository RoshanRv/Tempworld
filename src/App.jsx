import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./templates/Login"

function App() {
    return (
        <Router>
            <div className="font-disp">
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
