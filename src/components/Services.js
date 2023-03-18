import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//services data
const services = [
  {
    name: "Websites",
    description:
      "Utilizing my knowledge of HTML, CSS, and JavaScript to build responsive and engaging designs. Additionally, I am constantly staying up-to-date with the latest technologies and trends to deliver the best results for my clients.",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "Focusing on creating an intuitive and visually appealing user experience. I am carefully selecting color schemes, typography, and layout to ensure ease of use and a professional aesthetic.",
    link: "Learn more",
  },
  {
    name: "Applications",
    description:
      "With my experience in basic JavaScript applications, I specialize in building e-commerce websites with pagination and fetching APIs.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              As a novice developer, I seek freelance opportunities to gain and
              enhance my skills.
            </h3>
            <a href="#work">
              <button className="btn btn-sm">See my work</button>
            </a>
          </motion.div>
          {/* services*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list*/}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
