import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => (
  <div className="min-h-screen bg-sand text-ink dark:bg-ink dark:text-white">
    <Header />
    <main className="min-h-[60vh]">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default Layout
