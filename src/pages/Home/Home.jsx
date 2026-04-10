import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Marquee from '../../components/Marquee';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>

      <Navbar />

      <main>

        <Hero />

        <Marquee />

        <About />

        <Skills />

        <Contato />

        <Footer />

      </main>

    </>
  )
}

export default Home;