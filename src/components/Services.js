import React from "react";
import "../css/Services.css";

export default function Services() {
  return (
    <div className="services padding-lr padding-tb">
      Services
      <h1 className="text">
        Getting <span className="colour"> Started </span> With Us
      </h1>
      <hr />
      <div className="services-row">
        <div className="services-content">Design & Innovation</div>
        <div className="more">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <hr />
      <div className="services-row">
        <div className="services-content">Degital Product Engineering</div>
        <div className="more">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <hr />
      <div className="services-row">
        <div className="services-content">Cloud Adoptation Services</div>
        <div className="more">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <hr />
      <div className="services-row">
        <div className="services-content">Data Analytics</div>
        <div className="more">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <hr />
      <div className="services-row">
        <div className="services-content">Degital Marketing Studio</div>
        <div className="more">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <hr/>
    </div>
  );
}
