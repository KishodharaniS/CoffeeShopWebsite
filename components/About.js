import AboutData from "./AboutData";
import Footer from './Footer';
import "./About.css";
const About = (props) => {
  return (
    <div className="destination">
      <h1>ABOUT US</h1>
     
      <AboutData
        className="first-des"
        heading="Coffee The Way It Was Meant To Be!"
        text="
          
        Taste and See Coffee Shop and Gallery offers a unique coffee house environment unlike any other in Macon. We are not only a place to drop in and get your morning cup of coffee (although you are more than welcome to do that), we are a place where you can sit down and enjoy that tailor-made cup of coffee. If you need to work, we have a seating area created specifically for you. If you need to rest, we have a soft-seating area in front of a stone fire place that is perfect for your weary mind and body. We offer a delicious variety of coffee roasted in house made by our professionally trained baristas. We have everything from classic coffee to our house made specialty beverages.  All of our sauces & syrups are made in-house with all natural ingredients (no chemicals or preservatives) ensuring you the highest quality in taste & health.  You can complete your coffee with one of our delicious sweet treats made by our very own baker. We look forward to serving you at Taste & See Coffee Shop and Gallery!"
        img1="http://image7.photobiz.com/8912/31_20230806185100_9363647_large.jpg"
       
      />
      <Footer/>
    </div>
  );
};
  
export default About;