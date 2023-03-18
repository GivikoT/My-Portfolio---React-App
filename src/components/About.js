import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  "
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              Welcome to my website! My Name is Giviko Tokhadze and I am a
              beginner developer with a deep passion for the field.Over the past
              few months, I've had the opportunity to put my skills into
              practice by freelancing for a variety of clients.
            </h3>
            <p className="mb-6 ">
              Throughout my career, I have had the opportunity to work in a
              variety of roles, gaining valuable experience and insights along
              the way. Despite the changes, I have faced, I have never been
              afraid to embrace new challenges and continue learning. As a
              result, I am eager to pursue a career as a developer and utilize
              my diverse skill set to make a positive impact in the tech
              industry. Always working towards improving myself and people
              around me!
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Month of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a href="#contact">
                <button className="btn btn-lg">Contact Me</button>
              </a>
              <a href="#work" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
