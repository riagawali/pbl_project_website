import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/68.avif";
import Footer from "../components/Footer";
// import AboutUs from "../components/AboutUs";
import Trip from "../components/Trip";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="" btnClass="hide" />
      <Trip />
      <Footer />
    </>
  );
}

export default About;
