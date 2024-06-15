"use client";
import axios from "axios";

import Image from "next/image";

import { motion } from "framer-motion";

type ServiceType = {
  title: string;
  description: string;
};

const Service = async () => {
  const data = await axios.get("http://localhost:5171/api/services");
  const services = await data.data;

  return (
    <div className="mt-[20px] cards">
      {services.map((service: ServiceType, i: any) => {
        return (
          <motion.div
            whileTap={{ opacity: 1 }}
            animate={true}
            key={i}
            className="bg-white shadow-xl rounded-md p-3 flex flex-col gap-3 mb-5 card hover:shadow-fuchsia-200">
            <div>
              <Image
                className="flex justify-start rounded-lg"
                src={"/Service.jpg"}
                alt="Services"
                width={80}
                height={80}
              />
            </div>
            <div className="w-full flex flex-col gap-2 mt-3 justify-start text-start">
              <h3 className="text-xl font-bold text-[var(--secondary)]">
                {service.title}
              </h3>
              <p className="text-[#4F4E4E]">{service.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Service;
