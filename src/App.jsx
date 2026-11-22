import { MessageCircle } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Excelencia from './components/Excelencia'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Excelencia />
      </main>

      {/* shortcut: número de WhatsApp fictício, trocar pelo real da clínica */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" /> Agendar via WhatsApp
      </a>
    </>
  )
}
