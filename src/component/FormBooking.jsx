import React, { useEffect, useState } from "react";
import { encode } from "url-encode-decode";
import axios from "axios";

function FormBooking(props) {
  const { popUpBooking, lang } = props;
  // state
  const [form, setForm] = useState({
    name: ``,
    massage: ``,
    validate: false,
    errorMassages: {
      name: ``,
      massage: ``,
    },
  });
  const [formText, setFormText] = useState({
    label: {
      name: `Name:`,
      massage: `Message:`,
    },
    note: `Please send me the explanation files on WhatsApp to this number: 666666666666`,
    send: `Send`,
    mail: {
      to: `reactme123@protonmail.com`,
      subject: `send booking info`,
      body: ``,
    },
  });
  const [serverData, setServerData] = useState(null);
  // lifecycle hooks
  useEffect( () => {
    const { data } = axios.get("/all");
    setServerData(data)
  }, []);
  // methods
  const handleChange = (e) => {
    //   clone
    let formClone = { ...form };
    //   edit
    formClone[e.currentTarget.name] = e.currentTarget.value.trim();
    // form validate;
    if (formClone.name.trim() !== "") {
      formClone.errorMassages.name = "";
    } else {
      formClone.errorMassages.name = "! fill in the name field";
    }
    if (formClone.massage.trim() !== "") {
      formClone.errorMassages.massage = "";
    } else {
      formClone.errorMassages.massage = "! fill in the massage field";
    }
    if (formClone.name.trim() !== "" && formClone.massage.trim() !== "") {
      formClone.validate = true;
      // setState
      setForm(formClone);
    } else {
      formClone.validate = false;
      // setState
      setForm(formClone);
    }
    // form link
    combineLink();
  };
  const combineLink = () => {
    // clone
    const formTextClone = { ...formText };
    // edit
    formTextClone.mail.body = `mailto:${formText.mail.to}?subject=${
      formText.mail.subject
    }&body=${encode(`name:${form.name}
    massage:${form.massage}
    `)}`;
    // setState
    setFormText(formTextClone);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };
  return (
    <div className="btn-form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <p className="booking-on">
            Booking on:
            <span className="day-selected">
              {lang === "en" ? popUpBooking.day.en : popUpBooking.day.ar}
            </span>
            <span className="timing-selected">
              {lang === "en" ? popUpBooking.timing.en : popUpBooking.timing.ar}
            </span>
          </p>
        </div>
        <div className="form-item">
          <label htmlFor="name">{formText.label.name}</label>
          <div className="input-box">
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <div className="error-massage">{form.errorMassages.name}</div>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="massage">{formText.label.massage}</label>
          <div className="input-box">
            <textarea
              name="massage"
              id="massage"
              cols="20"
              rows="6"
              value={form.massage}
              onChange={handleChange}
            ></textarea>
            <div className="error-massage">{form.errorMassages.massage}</div>
          </div>
        </div>
        <div className="note">
          <p>{formText.note}</p>
        </div>
        <div className="form-item">
          {form.validate ? (
            <>
              <a className="send-link" href={formText.mail.body}>
                {formText.send}
              </a>
              <input type="submit" value="submit" />
            </>
          ) : (
            <div>
              <div className="send-link" href={formText.mail.body}>
                {formText.send}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormBooking;
