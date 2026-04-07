import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Marquee from '../../components/Marquee';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Contato from '../../components/Contato';

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

      </main>

    </>
  )
}

export default Home;