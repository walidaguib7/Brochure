import React from "react";
import Service from "./Service";
import "./style.css";

const ServicesUi = async () => {
  return (
    <section className="px-24 pt-12 pb-10" id="services">
      <div className="flex flex-col text-center">
        <h3 className="text-2xl mb-6 font-extrabold text-[var(--primary)] title">
          Our Services that we provide
        </h3>
        <Service />
      </div>
    </section>
  );
};

export default ServicesUi;
