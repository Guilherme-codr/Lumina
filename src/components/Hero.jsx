import { ArrowUpRight, ShieldCheck, Star } from 'lucide-react'
import heroImg from '../assets/hero.jpg'

const stats = [
  ['+2.500', 'Sorrisos transformados'],
  ['100% 3D', 'Escaneamento sem moldes'],
  ['4.9 ★', 'Satisfação no Google'],
]

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-3 rounded-full border border-border-subtle bg-white px-5 py-2 text-xs font-semibold tracking-wide text-primary sm:text-sm">
            <span className="size-2 rounded-full bg-accent-light" />
            ODONTOLOGIA ESTÉTICA &amp; REABILITAÇÃO ORAL
          </p>

          <h1 className="mt-8 font-serif text-5xl leading-[1.05] font-semibold tracking-tight text-primary sm:text-6xl xl:text-7xl">
            A arte de esculpir <em className="font-normal text-accent">sorrisos naturais</em> com precisão e conforto.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
            Unimos odontologia digital 3D, materiais de alta estética e um ambiente pensado como um spa para
            transformar sua saúde bucal sem dor e sem ansiedade.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#agendar"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-hover"
            >
              Agendar Avaliação <ArrowUpRight className="size-5 text-accent-light" />
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-white px-10 py-5 text-lg font-semibold text-primary transition-colors hover:border-accent"
            >
              Conhecer Tratamentos
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border-subtle pt-10">
            {stats.map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-text-muted sm:text-base">{label}</dt>
                <dd className="font-serif text-2xl text-primary sm:text-4xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-primary/15">
            <div className="relative aspect-[4/5]">
              <img src={heroImg} alt="Dentista analisando exames de imagem" className="size-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-8 pt-24">
                <p className="text-sm font-semibold tracking-[0.2em] text-accent-light">PROTOCOLO EXCLUSIVO</p>
                <p className="mt-2 font-serif text-2xl text-white">Planejamento Digital do Sorriso (DSD)</p>
              </div>
            </div>
          </div>

          <figure className="absolute -top-6 -left-4 max-w-[17rem] rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur sm:-left-12">
            <div className="flex gap-1 text-accent" aria-label="5 estrelas">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <blockquote className="mt-3 text-sm font-medium text-text-main">
              "Atendimento impecável, zero dor e resultado super natural!"
            </blockquote>
            <figcaption className="mt-2 text-xs text-text-muted">— Mariana Costa, Paciente</figcaption>
          </figure>

          <div className="absolute -right-4 bottom-36 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl sm:-right-10">
            <span className="grid size-12 place-items-center rounded-xl bg-primary text-accent-light">
              <ShieldCheck className="size-6" />
            </span>
            <div>
              <p className="font-semibold text-primary">Experiência Sem Dor</p>
              <p className="text-sm text-text-muted">Anestesia computadorizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
