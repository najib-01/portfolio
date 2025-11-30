import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";


export default function Header() {
  return (
    <>
      <div className="nb_and_icons">
        <h1>NB</h1>
        <div className="icons">
          <a href="https://www.linkedin.com/in/najib-raja-7030a433b/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/killua_____01/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/najib-01" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="box_1">
        <div
        
        className="text_box_1">
          <motion.div
          initial={{x : -100, opacity : 0}}
        animate={{x : 0, opacity : 1}}
        transition={{duration : 1.5 , delay : 0.5}}>

          <h1>I’m Najib</h1></motion.div>
            <motion.div
              initial={{x : -100, opacity : 0}}
        animate={{x : 0, opacity : 1}}
        transition={{duration : 1.5 , delay : 1.2}}

            >
          <h2>Front-End Developer</h2>
          </motion.div>
              <motion.div
                initial={{x : -100, opacity : 0}}
        animate={{x : 0, opacity : 1}}
        transition={{duration : 1.5 , delay : 1.8}}
              >
            <p>
              Hi, I’m Najib, a Front-End Developer focused on building clean,
              modern,
            </p>
            <p>and responsive user interfaces.</p>
            <p>
              I work mainly with React, and I enjoy creating smooth and visually
            </p>
            <p>appealing front-end experiences.</p>
            <p>
              I’m always improving my skills and learning new techniques to
              build
            </p>
            <p>better and more user-friendly designs.</p>
          </motion.div>
        </div>
        <motion.div
          initial={{x : 100, opacity : 0}}
          animate={{x : 0, opacity : 1}}
          transition={{duration : 1.5, delay : 2}}
        >
          <img className="img_1" src="/dd1.png" alt="my img" />
        </motion.div>
      </div>
      
        <hr />
      
    </>
  );
}
