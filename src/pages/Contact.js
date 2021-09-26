import React from "react";
// import TextBoxComponent from '../components/formComponents/TextBoxComponent';

const Contact = () => {
  //const generateForm = () => {
  //   const contactForm = {
  //     'First Name': 'text',
  //     Email: 'email',
  //     'Phone Number': 'text',
  //     Orgarnisation: 'textarea',
  //     Requirement: 'textarea'
  //   };
  //   const formList = Object.keys(contactForm).map((key, idx) => {
  //     return <TextBoxComponent key={key} name={'Phone Number'} type='text' />
  //   });
  //   return formList;
  // };
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-xs-12 my-2">
          <h3 className="common-heading mb-3">Factory Address</h3>
          <div className="text-primary">
            <h5 className="p-2"> ConnWorld Engineering</h5>
            <div className="p-2">
              <i className="fas fa-map-pin mr-2"></i>
              <a
                href="https://www.google.com/maps/place/ConnWorld+Engineering/@13.2681227,77.5568188,17z/data=!4m12!1m6!3m5!1s0x3bb1df349ca24475:0xe52f935b0183a870!2sConnWorld+Engineering!8m2!3d13.2681175!4d77.5590075!3m4!1s0x3bb1df349ca24475:0xe52f935b0183a870!8m2!3d13.2681175!4d77.5590075"
                target="_blank"
                rel="noreferrer">
                Shed No 55, Doddaballapur Integrated Textile Park Ltd, KIADB
                Industrial Area, Karnataka- 561203
              </a>
            </div>
            <div className="p-2">
              <i className="fas fa-envelope mr-2"></i>
              <a href="mailto:djk@connworldengg.com">djk@connworldengg.com</a>
            </div>
            <div className="p-2">
              <i className="fas fa-phone mr-2"></i>
              <a href="callto:+353 894320959">+91 84310 43608</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 my-2">
          <iframe
            src="http://maps.google.com/maps?q=13.268347224419331, 77.55896458199547&z=16&output=embed"
            height="450"
            width="600"
            style={{ border: "none" }}
            title="Connworld"></iframe>
        </div>
        {/* <div className="col-md-6 col-xs-12 my-2">
          <h3 className="common-heading mb-3 ">Query</h3>
          <form>
            {/* {generateForm}
            <TextBoxComponent key={'idx'} name={'Phone Number'} type='text' /> 
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="firstname"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="organisation"
                name="organisation"
                placeholder="organisation"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="firstname"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <textarea
                rows="5"
                className="form-control"
                id="requirement"
                name="requirement"
                placeholder="Requirement"
                style={{ resize: "none" }}
              />
            </div>
            <div className="text-right">
              <button type="button" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div> */}
      </div>
      <h6 className="my-2 text-justify">
        "ConnWorld operates in IST time zone, you will get a response within 24
        hours the maximum if you happen to be from the time zone with a time
        difference of 6+ hours to IST."
      </h6>
    </div>
  );
};

export default Contact;
