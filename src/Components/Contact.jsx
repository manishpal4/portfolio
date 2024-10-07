import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xovqanrb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="flex-cols" onSubmit={handleSubmit}>
      <div className="md:flex-cols py-2">
        <label className="pr-3 pb-2" htmlFor="email">Email Address</label>
        <input
          className="text-black px-3 py-2 rounded-md w-full"
          id="email"
          type="email"
          name="email"
          placeholder="Type email here"
        />
      </div>
      <div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="p-2 text-black rounded-md w-full my-2"
        id="message"
        name="message"
        placeholder="Type your message here"
      />
      </div>
      <div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="items-left rounded-lg bg-red-600 py-2 px-4 text-center"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
      </div>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default Contact;
