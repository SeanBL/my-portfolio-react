import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../styles/contact.css'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (error) {
            setError("Please correct errors");
        } else {
        emailjs.sendForm('service_hfn4hk9', 'template_xgds4zh', form.current, 'fMFQcOofcUsCamwN5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }
      };

    const [ error, setError ] = useState('');

    function validEmail(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    };
    
    const emailRequired = (e) => {
        if (validEmail(e.target.value)) {
            setError("");
        } else {
            setError("Invalid email address");
        }
    };

    const nameRequired = (e) => {
        if (e.target.value === "") {
            setError("Name is required");
        } else {
            setError("");
        }
    };

    const messageRequired = (e) => {
        if (e.target.value === "") {
            setError("Message is required");
        } else {
            setError("");
        }
    };

    return (
        <section>
            <div className="formContainer">
                <h2 className="contactTitle">Contact Me</h2>
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <input className="formItem" type='text' placeholder="Full Name" name="user_name" onBlur={nameRequired} required/>
                    <input className="formItem" type='email' placeholder="email" name="user_email" onBlur={emailRequired} required/>
                    <input className="formItem" type='text' placeholder="Subject" name="subject" required/>
                    <textarea className="formItem" type='text' placeholder="Enter message here" name="message" cols='30' rows='10' onBlur={messageRequired}></textarea>
                    <div>
                        {error && (<div className="error">{error}</div>)}
                    </div>
                    <button className="sendBtn" type="submit">Send Message</button>
                </form>
            </div>
            
            
        </section>
    );
};