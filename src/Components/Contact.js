import './Styles/contact.css'

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


export default function Contact() {
    return (
        <>
            <div class="contact-container">
                <span class="big-circle"></span>
                <img src="img/shape.png" class="square" alt="" />
                <div class="form">
                    <div class="contact-info">
                        <h3 class="title">Let's get in touch</h3>
                        <p class="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
                        </p>

                        <div class="info">
                            <div class="information">
                                <img src="Assets/location.png" class="icon" alt="" />
                                <p>92 Cherry Drive Uniondale, NY 11553</p>
                            </div>
                            <div class="information">
                                <img src="Assets/mainbg.png" class="icon" alt="" />
                                <p>lorem@ipsum.com</p>
                            </div>
                            <div class="information">
                                <img src="Assets/phone.png" class="icon" alt="" />
                                <p>123-456-789</p>
                            </div>
                        </div>

                        <div class="social-media">
                            <p>Connect with us :</p>
                            <div class="social-icons">
                                <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="/"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <span class="circle one"></span>
                        <span class="circle two"></span>

                        <form action="index.html" autocomplete="off">
                            <h3 class="title">Contact us</h3>
                            <div class="input-container">
                                <input type="text" name="name" class="input" />
                                <label for="">Username</label>
                                <span>Username</span>
                            </div>
                            <div class="input-container">
                                <input type="email" name="email" class="input" />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div class="input-container">
                                <input type="tel" name="phone" class="input" />
                                <label for="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div class="input-container textarea">
                                <textarea name="message" class="input"></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" class="btn1" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}