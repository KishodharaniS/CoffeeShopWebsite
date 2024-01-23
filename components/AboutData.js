import { Component } from "react";
import "./About.css";

class AboutData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p> {this.props.text}</p>
        </div>

        <div className="image">
          <img src={this.props.img1} alt="" />
          
        </div>
      </div>
    );
  }
}
export default AboutData;