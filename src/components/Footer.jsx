import { NavLink } from 'react-router-dom'
import { secondaryLinks, socialLinks } from '../data/site'

const Footer = () => (
  <footer className="border-t border-black/5 bg-mist px-6 py-12 text-sm text-ink/80 dark:border-white/10 dark:bg-ink dark:text-white/70">
    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr,1fr,1fr]">
      <div>
        <div className="mb-4 text-lg font-semibold text-ink dark:text-white">Let&apos;s Progress</div>
        <p className="max-w-md text-ink/70 dark:text-white/70">
          En cours de formation par l&apos;IUT de Montpellier depuis 2022, je suis le cursus de BUT Informatique.
          Je souhaite découvrir l&apos;informatique dans sa généralité puis me spécialiser dans les jeux vidéo.
        </p>
      </div>
      <div>
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink dark:text-white">Pages</div>
        <div className="flex flex-col gap-2">
          {secondaryLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className="hover:text-moss">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink dark:text-white">Liens utiles</div>
        <div className="flex flex-col gap-2">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-moss">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-6xl border-t border-black/5 pt-6 text-center text-xs text-ink/60 dark:border-white/10 dark:text-white/60">
      Copyright © {new Date().getFullYear()} | Built with React + Tailwind
    </div>
  </footer>
)

export default Footer
