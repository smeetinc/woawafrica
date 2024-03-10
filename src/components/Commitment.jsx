import React from "react";

function Commitment() {
  return (
    <div className="bg-neutral-400 px-8 py-8">
      <div className="w-full text-center my-8">
        <p className="font-Lora font-semibold leading-4 my-3">Tagline</p>
        <h2 className="text-5xl/[60px] font-bold">
          Sustainability <span className="text-primary-200">Commitment</span>
        </h2>
        <p className="text-lg font-normal font-Lora mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          aperiam?
        </p>
      </div>
      <div className="my-4 grid grid-cols-3 gap-4">
        {/*card starts */}
        <div className="text-center">
          <img src="assets/hands.png" alt="hands" className="mx-auto" />
          <h4 className="font-Lora text-xl font-bold my-3">
            Embracing Eco-Tourism
          </h4>
          <p className="font-Lora ">
            WoawAfrica pledges to support local communities by collaborating
            with them for sustainable tourism practices
          </p>
        </div>
        {/* card ends */}
        {/*card starts */}
        <div className="text-center">
          <img src="assets/location.png" alt="location" className="mx-auto" />
          <h4 className="font-Lora text-xl font-bold my-3">
            Community Empowerment
          </h4>
          <p className="font-Lora ">
            WoawAfrica pledges to support local communities by collaborating
            with them for sustainable tourism practices
          </p>
        </div>
        {/* card ends */}
        {/*card starts */}
        <div className="text-center">
          <img src="assets/sticks.png" alt="sticks" className="mx-auto" />
          <h4 className="font-Lora text-xl font-bold my-3">
            Carbon Conscious Adventures
          </h4>
          <p className="font-Lora ">
            We strive to minimize our environmental impact, providing you with
            eco-friendly travel options.
          </p>
        </div>
        {/* card ends */}
        {/*card starts */}
        <div className="text-center">
          <img src="assets/pot.png" alt="pots" className="mx-auto" />
          <h4 className="font-Lora text-xl font-bold my-3">
            Cultural Preservation
          </h4>
          <p className="font-Lora ">
            WoawAfrica is dedicated to safeguarding the rich cultural heritage
            of Africa through responsible tourism
          </p>
        </div>
        {/* card ends */}
        {/*card starts */}
        <div className="text-center">
          <img src="assets/msg.png" alt="message" className="mx-auto" />
          <h4 className="font-Lora text-xl font-bold my-3">
            Plastic-Free Pledge
          </h4>
          <p className="font-Lora ">
            We're actively working towards reducing plastic waste by encouraging
            and implementing plastic-free initiatives.
          </p>
        </div>
        {/* card ends */}
        {/*card starts */}
        <div className="text-center">
          <img src="assets/guard.png" alt="guard symbol" className="mx-auto" />
          <h4 className="font-Lora text-xl font-bold my-3">
            Biodiversity Protection
          </h4>
          <p className="font-Lora ">
            Join us in the effort to conserve Africa's diverse ecosystems,
            ensuring a thriving environment for generations to come.
          </p>
        </div>
        {/* card ends */}
      </div>
    </div>
  );
}

export default Commitment;
