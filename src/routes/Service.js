import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/109.avif"; //34.jpg
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Service"
        text="Let's Detect"
        textareaPlaceholder="Enter news here..."
        // button="Real"
        // button1="Fake"
        buttons={["Fake", "Real"]}
        url="/"
        btnClass="hide"
        b="Submit"
        isServicePage={true}
      />

      {/* <div className="form-container">
        <h1>Let's Detect</h1> */}

      {/* <form>
          <p>
            <label for="News">Enter your news</label>
          </p>
          <textarea id="News" name="News" rows="8" cols="70"></textarea>
        </form> */}

      {/* </div> */}

      <Footer />
    </>
  );
}

export default Service;
