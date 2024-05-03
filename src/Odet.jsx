import { useRef } from "react";
import emailjs from "@emailjs/browser";
let Odet=()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m81a27q', 'template_sgg90h9', form.current, {
        publicKey: 'Oeri4x6zWsdHFJT_E',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

    return <>
    <div className="container">
        <div className="row">
        <div className="col-7 mt-5 ml-6">
            <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className="form-control" placeholder="enter order id..." type="number" name="user_name" />
                            <label>Email</label>
                            <input className="form-control" type="email" placeholder="enter your email..." name="user_email" />
                            <label>Message</label>
                            <textarea className="form-control" placeholder="enter your address..." name="message" />
                            <input className="form-control btn btn-primary" type="submit" value="Send" />
            </form>
            </div>
        </div>
    </div>
    </>
}
export default Odet