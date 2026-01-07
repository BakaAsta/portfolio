import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Apprentissage from './pages/Apprentissage'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import InternshipDetail from './pages/InternshipDetail'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="apprentissage" element={<Apprentissage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="internship/:slug" element={<InternshipDetail />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-details" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
