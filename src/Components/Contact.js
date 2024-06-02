import "./Styles/contact.css";
import location from "./Assets/location.png";
import Email from "./Assets/email.png";
import Shape from "./Assets/shape.png";
import Phone from "./Assets/phone.png";
import { useState } from "react";
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <>
      <div class="contact-container">
        {/* <img src={shape} class="square" alt="" /> */}
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              You can get in touch with us at any time by phone or email with
              any questions or comments you may have.
            </p>

            <div class="info">
              <div class="information">
                <img src={location} class="icon" alt="" />
                <p>WLE-301, IIT Kanpur, Uttar Pradesh</p>
              </div>
              <div class="information">
                <img src={Email} class="icon" alt="" />
                <p>soce@iitk.ac.in</p>
              </div>
              <div class="information">
                <img src={Phone} class="icon" alt="" />
                <p>+91-7906379797</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/soce.iitk"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/@societyofcivilengineersiit3172"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/soce.iitk/?hl=en"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/company/society-of-civil-engineers-iitk/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>

          <div class="contact-form">
            {/* <span class="circle one"></span> */}
            {/* <span class="circle two"></span> */}

            <form
              action="/contact-us"
              onSubmit={(e) => e.preventDefault()}
              autocomplete="off"
            >
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  name="name"
                  class="input"
                />
              </div>
              <div class="input-container">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  class="input"
                />
                {/* <label for="">Email</label>
                                <span>Email</span> */}
              </div>
              <div class="input-container">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  class="input"
                />
                {/* <label for="">Phone</label>
                                <span>Phone</span> */}
              </div>
              <div class="input-container textarea">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  class="input"
                ></textarea>
                {/* <label for="">Message</label>
                                <span>Message</span> */}
              </div>
              <input
                onClick={() => {
                  alert("Your response has been recorded!");
                  setName("");
                  setEmail("");
                  setMsg("");
                  setPhone("");
                }}
                type="submit"
                class="btn1"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
