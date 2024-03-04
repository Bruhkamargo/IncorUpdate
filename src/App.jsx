import Home from './Pages/Home/Home.jsx';
import LifeStyle from './Pages/App/App.jsx'
import Presentation from './Pages/Presentation/Presentation.jsx'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/App/:id/:StrName" element={<LifeStyle />} />
                <Route path="/Apresentacao" element={<Presentation />} />
            </Routes>
        </Router>
    )
}