import Home from './Pages/Home/App.jsx';
import LifeStyle from './Pages/App/App.jsx'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/App" element={<LifeStyle />} />
            </Routes>
        </Router>
    )
}