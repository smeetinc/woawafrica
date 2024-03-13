import React from "react";
import Testimony from "./Testimony";

function Testimonials() {
  return (
    <div className="bg-white px-8 py-14">
      <h2 className="text-4xl my-5 font-bold">
        <span className="text-secondary-300">Customer</span>{" "}
        <span className="text-primary-200">testimonials</span>
      </h2>
      <div className="mt-12 mb-10 grid grid-cols-3 gap-4">
        <Testimony
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
          avatar="/assets/Emoji.png"
          name="Name Surname"
          position="Position, Company name"
        />
        <Testimony
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          avatar="/assets/Emoji.png"
          name="Name Surname"
          position="Position, Company name"
        />
        <Testimony
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
          avatar="/assets/Emoji.png"
          name="Name Surname"
          position="Position, Company name"
        />
        <Testimony
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
          avatar="/assets/Emoji.png"
          name="Name Surname"
          position="Position, Company name"
        />
        <Testimony
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          avatar="/assets/Emoji.png"
          name="Name Surname"
          position="Position, Company name"
        />
        <Testimony
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
          avatar="/assets/Emoji.png"
          name="Name Surname"
          position="Position, Company name"
        />
      </div>
    </div>
  );
}

export default Testimonials;
