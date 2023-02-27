import {useRef} from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hfn4hk9', 'template_xgds4zh', form.current, 'fMFQcOofcUsCamwN5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <section>
            <div className="formContainer">
                <h2 className="contactTitle">Contact Me</h2>
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder="Full Name" name="user_name" required/>
                    <input type='email' placeholder="Email" name="user_email" required/>
                    <input type='text' placeholder="Subject" name="subject" required/>
                    <textarea name="message" cols='30' rows='10'></textarea>
                    <button className="sendBtn" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};