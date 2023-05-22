import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImag from "../assets/102.avif";

function Home() {
  return (
    <>
      <Navbar />
      {/* <img alt="img" src={MainImg} /> */}
      {/* <button>Lets detect</button> */}
      <Hero
        cName="hero"
        heroImg={heroImag}
        title="Hi!"
        text="Click here to detect"
        buttonText="Lets Detect"
        url="/service"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Home;
