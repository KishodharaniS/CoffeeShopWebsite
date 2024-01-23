import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Coffee Shop</h1>
          <p>Choose Your Favors</p>
        </div>
        <div>
          <a href="/">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact US</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
          <a href="/">Policy License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
