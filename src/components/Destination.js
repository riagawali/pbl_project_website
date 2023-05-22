import FakeOnline from "../assets/36.jpg";
import Ml from "../assets/37.jpg";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>How does it work?</h1>

      <div className="first-des">
        <div className="des-text">
          <p>
            Internet is one of the great sources of information for its users.
            There are different social media platforms that includes Facebook or
            Twitter that helps the people to connect with other people.
            Different kind of news are also shared on these platforms. People
            nowadays prefer to access the news from these platforms because
            these are easy to use and easy to access platforms. But as like
            their advantages, these platforms are also used as the best source
            by the cyber criminals. These persons can spread the fake news
            through these platforms. People start believing in such news as well
            as shares the news with other peoples. Fake news on different
            platforms is spreading widely and is a matter of serious concern, as
            it causes social wars and permanent breakage of the bonds
            established among people.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={FakeOnline} />
          <img alt="img" src={Ml} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
