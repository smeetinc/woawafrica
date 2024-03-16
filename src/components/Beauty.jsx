import React from "react";
import "./Grid.css";

function Beauty() {
  return (
    <div className="beauty-container">
      <div className="lg:max-w-3/5 mx-auto my-4">
        <h3 className="beauty-title">
          <span className="text-secondary-300">Unveil</span> the Awe-Inspiring
          <br />
          Beauty of Africa's{" "}
          <span className="text-primary-200">Hidden Gems</span>
          <br />
          with WoawAfrica.{" "}
        </h3>
      </div>
      <div className="beauty-grid">
        {/* Woman image occupying two rows, one column (top left corner) */}
        <div className="row-span-2 col-span-1">
          <img
            src="/assets/woman.png"
            alt="test one"
            className="beauty-image"
          />
        </div>
        {/* Lion image (top right corner) */}
        <div className="row-1 col-2">
          <img src="/assets/lion.png" alt="test one" className="beauty-image" />
        </div>
        {/* Pyramid image (bottom left corner) */}
        <div className="row-3 col-1">
          <img
            src="/assets/pyramid.png"
            alt="test one"
            className="beauty-image"
          />
        </div>
        {/* Juju image occupying two rows, one column (bottom right corner) */}
        <div className="row-span-2 col-span-1">
          <img src="/assets/juju.png" alt="test one" className="beauty-image" />
        </div>
      </div>
    </div>
  );
}

export default Beauty;
