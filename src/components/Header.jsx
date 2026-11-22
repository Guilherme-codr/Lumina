import { useState } from 'react'
import { CalendarCheck, Menu, X } from 'lucide-react'

const links = [
  ['Início', '#inicio'],
  ['Especialidades', '#especialidades'],
  ['A Clínica', '#clinica'],
  ['Simulador', '#simulador'],
  ['Equipe', '#equipe'],
  ['Depoimentos', '#depoimentos'],
]

export function ToothIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7 .5 3 1 6.5 3 6.5s2-4 4-4 2 4 4 4 2.5-3.5 3-6.5c.5-2.5 2-4 2-7C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3Z" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/60 bg-bg-primary/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-xl bg-primary text-accent-light">
            <ToothIcon className="size-6" />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-2xl font-semibold text-primary">LUMINA</span>
            <span className="mt-1 block text-xs font-semibold tracking-[0.3em] text-accent">ODONTOLOGIA</span>
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex gap-10 text-[15px] text-text-main/80">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-accent">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#agendar"
          className="hidden items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover lg:inline-flex"
        >
          Agendar Consulta <CalendarCheck className="size-5 text-accent-light" />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-subtle px-4 pb-6 lg:hidden" aria-label="Principal">
          <ul className="flex flex-col py-2">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="block py-3 text-text-main">{label}</a>
              </li>
            ))}
          </ul>
          <a href="#agendar" className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white">
            Agendar Consulta <CalendarCheck className="size-5 text-accent-light" />
          </a>
        </nav>
      )}
    </header>
  )
}
