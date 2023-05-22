import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <form>
        <a href={props.url}>Linkedin Link</a>
      </form>
      <form>
        <a href={props.url1}>Github Link</a>
      </form>
    </div>
  );
}

export default TripData;
