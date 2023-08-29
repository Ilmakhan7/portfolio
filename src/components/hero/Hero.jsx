import "./hero.css";
import hero from '../../assets/herop-removebg-preview.png'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";

const Hero = ({ onClick }) => {
  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section id="home">
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="hero-sub-cont-1" variants={leftVariant}>
            <p>
              HEY <span className="wave">👋</span> ,
            </p>
            <div className="flex left_align">
              I am
              <span className="alt-text-yellow">
                <Typewriter
                  options={{
                    strings: ["Front End Developer"],
                    autoStart: true,
                    loop: true,
                    cursor: "✍️",
                    pauseFor: 5000,
                  }}
                />
              </span>
            </div>
            <h1 className="hero-main-text ">
              I create <span className="alt-text">beautiful</span> and
              <span className="alt-text"> interactive</span> user interfaces
            </h1>

            <div className="btn-div">
              <button className="btn" onClick={onClick}>
                Hire Me
              </button>
              <Button
                href="https://app.luminpdf.com/viewer/64ee0403b7942c07bf230fe9"
                className="btn"
                target="blank"
              >
                Download CV
                <i className="fa-solid fa-download"></i>
              </Button>
            </div>
          </motion.div>
          <motion.div className="hero-sub-cont" variants={rightVariant}>
            <img src="https://i.pinimg.com/564x/1c/0f/e0/1c0fe0a05a10953b27bc3bd6d5eaed0b.jpg" alt="3D icon" className="hero-img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;