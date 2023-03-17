import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
//   console.log(date);
  return (
    <>
      <footer className="bg-light text-center ">
        <p>©️ {date} ShubTechnical. All rights reserved | Terms & Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
