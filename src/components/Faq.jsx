import React from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <div className="bg-neutral-500 px-8 py-14">
      <div className="mt-2 mb-6">
        <h3 className="text-5xl font-bold ">
          <span className="text-secondary-300 mt-2">Frequently</span> Asked{" "}
          <span className="text-primary-200">Questions</span>Questions
        </h3>
        <p className="my-3">
          Explore the Ins and Outs of Your African Adventure with WoawAfrica's
          FAQs.
        </p>
      </div>
      <div className="mt-4 mb-3">
        <Accordion
          title="What makes WoawAfrica unique?"
          answer="I go answer later"
        />
        <Accordion
          title="How do I book a travel experience on WoawAfrica?"
          answer="I go answer later"
        />
        <Accordion
          title="Are the prices on WoawAfrica inclusive of all costs?"
          answer="I go answer later"
        />
        <Accordion
          title="Can I customize my travel itinerary?"
          answer="I go answer later"
        />
        <Accordion
          title="Is it safe to travel with WoawAfrica"
          answer="I go answer later"
        />
      </div>
      <div className="mt-4 mb-2">
        <h3 className="my-2 font-bold text-4xl">Still have a question?</h3>
        <p className="my-2">
          Reach out, and let's make your WoawAfrica journey extraordinary!
        </p>
        <Link to="/contact">
          <button className="text-white py-3 px-3 w-fit h-fit bg-primary-200 rounded-lg">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Faq;