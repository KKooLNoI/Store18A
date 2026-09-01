import AnnouncementBar from './components/AnnouncementBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MarqueeTicker from './components/MarqueeTicker.jsx'
import FeaturesStrip from './components/FeaturesStrip.jsx'
import WeeklyMenu from './components/WeeklyMenu.jsx'
import FlashDeal from './components/FlashDeal.jsx'
import StoreSection from './components/StoreSection.jsx'
import VeggieSection from './components/VeggieSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingBtn from './components/FloatingBtn.jsx'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <FeaturesStrip />
        <WeeklyMenu />
        <FlashDeal />
        <StoreSection />
        <VeggieSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  )
}
