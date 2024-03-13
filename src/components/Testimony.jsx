import React from "react";

function Testimony({ text, name, avatar, position }) {
  return (
    <div className="bg-neutral-600 rounded-xl py-6 px-4 text-justify font-Lora h-fit">
      <p className="my-6  text-lg">"{text}"</p>

      <div className="flex gap-4 h-fit items-center mt-10">
        <img
          src={avatar}
          alt="head of person"
          className="w-9 h-9 object-contain"
        />
        <div>
          <p>
            <strong>{name}</strong>
          </p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
