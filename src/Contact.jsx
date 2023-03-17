import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    Phone: "",
    email: "",
    Textarea: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} Here is what i want to say`
    );
  };

  return (
    <>
      <div className=" ">
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Full Name
                  </label>
                  <input
                    type="Name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="Phone"
                    value={data.Phone}
                    onChange={inputEvent}
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="Textarea"
                    value={data.Textarea}
                    onChange={inputEvent}
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
