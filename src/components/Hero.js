import "./HeroStyles.css";

function Hero(props) {
  const isServicePage = props.isServicePage;
  const isLoginPage = props.isLoginPage;
  const outputValue = props.outputValue;
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="Herpling" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h2>{props.text}</h2>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
          {isServicePage && (
            // <form>
            //   <div className="form-container">
            //     <textarea
            //       id="News"
            //       name="News"
            //       rows="8"
            //       cols="70"
            //       placeholder={props.textareaPlaceholder}
            //     ></textarea>
            //     <button>{props.b}</button>
            //     <button>{props.buttons[0]}</button>
            //     <button>{props.buttons[1]}</button>
            //   </div>
            // </form>

            <form>
              <div className="form-container">
                <textarea
                  id="News"
                  name="News"
                  rows="8"
                  cols="70"
                  placeholder={props.textareaPlaceholder}
                ></textarea>

                <button>{props.b}</button>

                <button className={outputValue === 1 ? "green-box" : "red-box"}>
                  {outputValue === 1 ? <span>Real</span> : ""}
                </button>
                <button className={outputValue === 0 ? "red-box" : "green-box"}>
                  {outputValue === 0 ? <span>Fake</span> : ""}
                </button>
              </div>
            </form>
          )}

          {/* <form>
            <input placeholder="Name" />
          </form>
          <form>
            <input placeholder="Email" />
          </form>
          <form>
            <input placeholder="Password" />
          </form>
          <form>
            <button rows="2">Sign Up</button>
            <button>Login</button>
          </form> */}
          {isLoginPage && (
            <>
              <form>
                <input placeholder="Name" />
              </form>
              <form>
                <input placeholder="Email" />
              </form>
              <form>
                <input placeholder="Password" />
              </form>
              <form>
                <button rows="2">Sign Up</button>
                <button>Login</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
