import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Destinations() {
  return (
    <div className="bg-neutral-300 px-2 lg:px-8 py-14 w-full">
      <div className="lg:flex justify-between w-full my-4">
        <div className="lg:w-1/2">
          <p className="font-Lora font-semibold">Woam Africa</p>
          <h2 className="my-3 text-5xl font-bold">
            <span className="text-secondary-300">Explore</span> Our{" "}
            <span className="text-primary-200">Destinations</span>
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-lg text-shades-300 font-Lora">
            Embark on a journey of discovery across the diverse landscapes and
            rich cultures of Africa. From the majestic deserts of the north to
            the lush rainforests of the central region, and from the vibrant
            cities of the west to the untamed wilderness of the south and east,
            our curated destinations promise unforgettable experiences and
            adventures for every traveler. Explore, immerse, and uncover the
            wonders that await you in Africa.
          </p>
        </div>
      </div>
      <div className="my-8 lg:grid grid-cols-2 gap-8">
        {/*---- Card starts--- */}
        <div className="rounded-lg lg:flex bg-black p-4 lg:bg-transparent lg:p-0 mb-4 lg:mb-0">
          <div className="w-full lg:w-2/5">
            <img
              src="/assets/image1.png"
              alt="West Africa"
              className="rounded-xl lg:rounded-l-2xl lg:rounded-e-none w-full h-64 object-cover   lg:h-full lg:w-screen"
            />
          </div>
          <div className="bg-black text-white lg:w-3/5 rounded-r-2xl lg:pl-4  pr-8 flex flex-col gap-6 py-2 lg:py-8 ">
            <h3 className="font-bold text-3xl">West Africa</h3>
            <p className="font-Lora lg:max-w-10/12 text-base">
              Discover the rhythm of the vibrant West African culture, where
              tradition meets modernity. Immerse yourself in the pulsating beats
              of Afrobeat music, explore bustling markets, and indulge in the
              rich flavors of West African cuisine.
            </p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Read more </p>
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
        </div>
        {/*----End of card */}
        {/*---- Card starts--- */}
        <div className="rounded-lg lg:flex bg-secondary-200 p-4 lg:bg-transparent lg:p-0 mb-4 lg:mb-0">
          <div className="w-full lg:w-2/5">
            <img
              src="/assets/image2.png"
              alt="North Africa"
              className="rounded-xl lg:rounded-l-2xl lg:rounded-e-none w-full h-64 object-cover   lg:h-full lg:w-screen"
            />
          </div>
          <div className="bg-secondary-200 text-white  lg:w-3/5 rounded-r-2xl lg:pl-4  pr-8 flex flex-col gap-6 py-2 lg:py-8">
            <h3 className="font-bold text-3xl">North Africa</h3>
            <p className="font-Lora lg:max-w-10/12 text-base">
              Experience the allure of ancient civilizations and timeless
              landscapes in North Africa. From the majestic pyramids of Egypt to
              the labyrinthine streets of Marrakech, delve into a world of
              history, mystery, and enchantment.
            </p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Read more </p>
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
        </div>
        {/*----End of card */}
        {/*---- Card starts--- */}
        <div className="rounded-lg lg:flex bg-primary-200 p-4 lg:bg-transparent lg:p-0 mb-4 lg:mb-0">
          <div className="w-full lg:w-2/5">
            <img
              src="/assets/image3.png"
              alt="East Africa"
              className="rounded-xl lg:rounded-l-2xl lg:rounded-e-none w-full h-64 object-cover   lg:h-full lg:w-screen"
            />
          </div>
          <div className="bg-primary-200 text-white lg:w-3/5 rounded-r-2xl lg:pl-4  pr-8 flex flex-col gap-6 py-2 lg:py-8">
            <h3 className="font-bold text-3xl">East Africa</h3>
            <p className="font-Lora lg:max-w-10/12 text-base">
              Embark on a journey of discovery through the breathtaking
              landscapes and diverse wildlife of East Africa. Witness the
              awe-inspiring beauty of the Serengeti plains, encounter majestic
              elephants in Amboseli, and trek to the summit of Africa's highest
              peak, Mount Kilimanjaro.
            </p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Read more </p>
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
        </div>
        {/*----End of card */}
        {/*---- Card starts--- */}
        <div className="rounded-lg lg:flex bg-secondary-100 p-4 lg:bg-transparent lg:p-0 mb-4 lg:mb-0">
          <div className=" w-full lg:w-2/5">
            <img
              src="/assets/image4.png"
              alt="southern Africa"
              className="rounded-xl lg:rounded-l-2xl lg:rounded-e-none w-full h-64 object-cover   lg:h-full lg:w-screen"
            />
          </div>
          <div className="bg-secondary-100 text-white lg:w-3/5 rounded-r-2xl lg:pl-4  pr-8 flex flex-col gap-6 py-2 lg:py-8">
            <h3 className="font-bold text-3xl">Southern Africa</h3>
            <p className="font-Lora lg:max-w-10/12 text-base">
              Uncover the wonders of Southern Africa, where adventure awaits at
              every turn. From the iconic Table Mountain in Cape Town to the
              vast expanse of the Okavango Delta, experience the thrill of
              safari, explore dynamic cities, and unwind on pristine beaches.
            </p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Read more </p>
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
        </div>
        {/*----End of card */}
        {/*---- Card starts--- */}
        <div className="rounded-lg lg:flex bg-primary-300 p-4 lg:bg-transparent lg:p-0 mb-4 lg:mb-0">
          <div className=" w-full lg:w-2/5">
            <img
              src="/assets/image5.png"
              alt="central Africa"
              className="rounded-xl lg:rounded-l-2xl lg:rounded-e-none w-full h-64 object-cover   lg:h-full lg:w-screen"
            />
          </div>
          <div className="bg-primary-300 text-white lg:w-3/5 rounded-r-2xl lg:pl-4  pr-8 flex flex-col gap-6 py-2 lg:py-8">
            <h3 className="font-bold text-3xl">Central Africa</h3>
            <p className="font-Lora lg:max-w-10/12 text-base">
              Explore the hidden gems of Central Africa, where untouched
              wilderness and ancient cultures beckon. Navigate the winding
              rivers of the Congo Basin, encounter rare species in the
              rainforests of Gabon, and immerse yourself in the rich traditions
              of Central African communities.
            </p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Read more </p>
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
        </div>
        {/*----End of card */}
      </div>
    </div>
  );
}

export default Destinations;
