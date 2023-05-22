import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/103.avif";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Sign Up/Login"
        btnClass="hide"
        name="Enter your Name"
        email=" Enter your Email Id"
        password="Enter your Password"
        buttons={["Login", "Sign Up"]}
        isLoginPage={true}
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
