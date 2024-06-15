import Image from "next/image";
import FaqList from "./FaqList";

const AboutUs = () => {
  return (
    <section className="px-24 pt-8 pb-12" id="about">
      <div className="flex flex-col text-center">
        <h3 className="text-2xl font-extrabold mb-6 text-[var(--primary)] ">
          About us
        </h3>
        <div className="flex justify-center items-center text-center gap-4">
          <Image
            src={"/Team.svg"}
            alt="Team Image illustration"
            width={500}
            height={500}
            className="basis-[50%]"
          />
          <FaqList />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
