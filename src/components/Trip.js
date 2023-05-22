import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/214.jpg";
import Trip2 from "../assets/210.png";
import Trip3 from "../assets/205.jpeg";
import Trip4 from "../assets/212.jpg";
import Trip5 from "../assets/220.jpg";

function Trip() {
  return (
    <div className="trip">
      {/* <h1>About Us</h1> */}
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading=" Pranjali"
          text="Hi! This is Pranjali"
          url="http://www.linkedin.com/in/pranjali-dharmadhikari-795445252"
          url1="https://github.com/PranjaliAD"
        />

        <TripData
          image={Trip2}
          heading=" Vaishnavi"
          text="Hi! This is Vaishnavi"
          url="http://www.linkedin.com/in/vaishnavi-deshmukh-b13292245"
          url1="https://github.com/vaishnavideshmukh26"
        />

        <TripData
          image={Trip3}
          heading=" Ria"
          text="Hi! This is Ria"
          url="https://www.linkedin.com/in/ria-g-b4386a143/"
          url1="https://github.com/riagawali"
        />

        <TripData
          image={Trip4}
          heading=" Dhanashri"
          text="Hi! This is Dhanashri"
          url="http://www.linkedin.com/in/dhanashri-gangurde-439007239/"
          url1="https://github.com/DhanashreeGangurde"
        />

        <TripData
          image={Trip5}
          heading="Iffat khan "
          text="Hi! This is Iffat Khan"
          url="http://www.linkedin.com/in/iffat-khan-68564a22a"
          url1="https://github.com/Iffat15"
        />
      </div>
    </div>
  );
}

export default Trip;
