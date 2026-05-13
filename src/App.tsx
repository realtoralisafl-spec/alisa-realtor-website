import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Buyers from './pages/Buyers'
import Sellers from './pages/Sellers'
import Communities from './pages/Communities'
import NewConstruction from './pages/NewConstruction'
import PropertySearch from './pages/PropertySearch'
import Contact from './pages/Contact'
import './index.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/new-construction" element={<NewConstruction />} />
          <Route path="/properties" element={<PropertySearch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
