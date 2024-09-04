import React from "react";
import ContactForm from "./Form";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 w-full justify-center mx-auto text-black text-5xl">
      <div className="h-[600px] flex flex-col">
        <p className="text-slate-200 py-6 px-10">Contact</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
