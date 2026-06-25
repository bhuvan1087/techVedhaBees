import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './sections/About.jsx';
import Appointments from './sections/Appointments.jsx';
import Contact from './sections/Contact.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import Stats from './sections/Stats.jsx';
import Technologies from './sections/Technologies.jsx';
import WhyChooseUs from './sections/WhyChooseUs.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
        <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Technologies />
        <WhyChooseUs />
        <Stats />
        <Contact />
        <Appointments />
      </main>
      <Footer />
    </div>
  );
}
