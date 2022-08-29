import { useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(true);
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    // We set the
    setVisible(false);
  };

  const contactForm = (
    <div id="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" name="first" required />
        </div>

        <div className="input-row">
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" name="last" required />
        </div>

        <div className="input-row">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="input-row">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>

        <div className="input-row">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );

  const submitText = (
    <p>
      We appreciate you contacting us. One of our colleagues will get back in
      touch with you soon! Have a great day!
    </p>
  );

  return visible ? contactForm : submitText;
}
