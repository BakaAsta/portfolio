import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { navLinks, socialLinks } from '../data/site'

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-black/5 bg-sand/80 backdrop-blur dark:border-white/10 dark:bg-ink/80">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold text-ink dark:text-white">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-white/10">
          <img src="/main/img/img.png" alt="Logo" className="h-6 w-6 object-contain" />
        </span>
        <span>Let&apos;s Progress</span>
      </NavLink>
      <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink md:flex dark:text-white">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) =>
              `transition hover:text-moss ${isActive ? 'text-moss' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-3 text-sm text-ink/70 md:flex dark:text-white/70">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-moss">
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
    <nav className="flex items-center gap-4 overflow-x-auto border-t border-black/5 px-6 pb-3 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink md:hidden dark:border-white/10 dark:text-white">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) => `whitespace-nowrap ${isActive ? 'text-moss' : ''}`}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </header>
)

export default Header
