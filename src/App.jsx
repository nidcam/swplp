import Hero from './components/sections/Hero'
import IsThisYou from './components/sections/IsThisYou'
import BeforeAfter from './components/sections/BeforeAfter'
import Agenda from './components/sections/Agenda'
import Bonuses from './components/sections/Bonuses'
import Host from './components/sections/Host'
import Proof from './components/sections/Proof'
import ForWhom from './components/sections/ForWhom'
import FinalOffer from './components/sections/FinalOffer'
import Footer from './components/sections/Footer'
import StickyBottomBar from './components/StickyBottomBar'
import RegistrationModal from './components/RegistrationModal'
import { RegistrationModalProvider } from './context/RegistrationModalContext'

export default function App() {
  return (
    <RegistrationModalProvider>
      <main>
        <Hero />
        <IsThisYou />
        <BeforeAfter />
        <Agenda />
        <Bonuses />
        <Host />
        <Proof />
        <ForWhom />
        <FinalOffer />
      </main>
      <Footer />
      <StickyBottomBar />
      <RegistrationModal />
    </RegistrationModalProvider>
  )
}
