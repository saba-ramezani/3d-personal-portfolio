import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[190px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-[49rem] leading-[35px]'
      >
        I'm a 23-year-old Computer Engineering graduate with a strong background in developing <span className="text-white text-[16px] bg-[rgba(82,51,255,0.7)] px-2 rounded-lg" >React Native</span> applications and web applications using <span className="text-white text-[16px] bg-[rgba(82,51,255,0.7)] px-2 rounded-lg">React</span>. 
        I'm passionate about <span className="text-white text-[16px] bg-[rgba(82,51,255,0.7)] px-2 rounded-lg"> Artificial Intelligence</span>  and <span className="text-white text-[16px] bg-[rgba(82,51,255,0.7)] px-2 rounded-lg">Machine Learning</span> , particularly in <span className="text-white text-[16px] bg-[rgba(82,51,255,0.7)] px-2 rounded-lg">Natural Language Processing</span>, <span className="text-white text-[16px] bg-[rgba(82,51,255,0.7)] px-2 rounded-lg">Graph Analysis</span> , and <span className="text-white text-[16px] bg-[rgba(82,51,255,0.7)] px-2 rounded-lg">Data Mining</span> .
         As a dedicated self-learner and a collaborative team player, I'm eager to continue expanding my knowledge and skills in these fields.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
