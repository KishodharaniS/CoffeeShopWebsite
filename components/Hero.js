import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="/" />
      </div>
      <div className="heroText">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.buttonClass}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}

export default Hero;