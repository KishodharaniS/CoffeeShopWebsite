import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Hero
        cName=".hero-mid"
        heroImg='https://b.zmtcdn.com/data/pictures/2/18365232/73e247033082e1377599e71823a1c09f.png'
        title="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;