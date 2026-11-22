import { Anchor, ArrowUpRight, Gem, ShieldCheck, Smile, Sparkles, Sun } from 'lucide-react'
import Reveal from './Reveal'

const tratamentos = [
  [Gem, 'Lentes de Contato Dental', 'Lâminas ultrafinas de porcelana que corrigem cor, formato e harmonia com desgaste mínimo.'],
  [Anchor, 'Implantes Dentários', 'Reabilitação fixa com cirurgia guiada por computador sem cortes e recuperação acelerada.'],
  [Smile, 'Ortodontia Invisível', 'Alinhadores transparentes removíveis e sob medida para alinhar seu sorriso com total discrição.'],
  [Sun, 'Clareamento a Laser', 'Protocolo dessensibilizante avançado para um sorriso visivelmente mais iluminado e saudável.'],
  [Sparkles, 'Harmonização Orofacial', 'Procedimentos sutis e elegantes para equilibrar os traços faciais e emoldurar seu sorriso.'],
  [ShieldCheck, 'Odontologia Preventiva', 'Check-up digital de alta definição e profilaxia com jato de bicarbonato aquecido (Airflow).'],
]

export default function Excelencia() {
  return (
    <section id="especialidades" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-accent">EXCELÊNCIA CLÍNICA</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-semibold text-primary sm:text-5xl lg:text-6xl">
            Tratamentos personalizados para cada detalhe do seu sorriso
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted sm:text-xl">
            Clique em qualquer especialidade abaixo para conhecer como funciona o procedimento, sua duração e os
            benefícios exclusivos.
          </p>
        </header>
        </Reveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tratamentos.map(([Icon, titulo, texto], i) => (
            <li key={titulo}>
              {/* atraso escalonado por coluna: os cartões da mesma linha entram em cascata */}
              <Reveal delay={(i % 3) * 120} className="h-full">
              {/* shortcut: leva ao agendamento; trocar por modal de detalhes quando o conteúdo de cada tratamento existir */}
              <a
                href="#agendar"
                className="group flex h-full flex-col rounded-[2rem] border border-border-subtle bg-bg-primary p-9 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="grid size-16 place-items-center rounded-2xl bg-white text-primary shadow-sm transition-colors duration-300 group-hover:bg-accent">
                  <Icon className="size-7" strokeWidth={1.75} />
                </span>
                <h3 className="mt-10 font-serif text-3xl font-semibold text-primary transition-colors duration-300 group-hover:text-white">{titulo}</h3>
                <p className="mt-4 mb-10 text-lg leading-relaxed text-text-muted transition-colors duration-300 group-hover:text-white/80">{texto}</p>
                <span className="mt-auto flex items-center justify-between border-t border-border-subtle pt-6 text-sm font-bold tracking-wide text-accent transition-colors duration-300 group-hover:border-white/15 group-hover:text-white">
                  VER DETALHES
                  {/* tom primary-hover para o círculo não sumir no fundo azul do card */}
                  <span className="grid size-10 place-items-center rounded-full bg-white text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary-hover group-hover:text-accent">
                    <ArrowUpRight className="size-4" />
                  </span>
                </span>
              </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
