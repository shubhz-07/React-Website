import React from "react";
import Common from "./Common";
import pic from "../src/images/about.gif";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={pic}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
