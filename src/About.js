import { motion } from "framer-motion";


export default function About(){
    return (
        <>
        <div>
            <div className="logo_about">
            <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}

            >About Me</motion.h1>
            </div>

            <div className="box_2">
                <motion.img
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}

                className="img_2" src="/pp2.jpg" alt="" />
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1.5}}
                >
            
            <p>I'm a Front-End Developer passionate about creating modern and responsive websites.</p> 

            <p>I specialize in HTML, CSS, JavaScript, and React, and I enjoy turning ideas into clean, </p>
            <p>user-friendly interfaces.</p>
            <p>I focus on writing efficient code, building smooth UI experiences, and making websites look great on all devices.</p>
            <p>I’m always learning new techniques and improving my skills to deliver better and faster web solutions.</p>
            <p>My goal is to grow as a developer, work on real-world projects, and keep building high-quality</p>
            <p> websites that are both functional and visually appealing.</p>
            </motion.div>
  </div>
        </div>
        <hr />
        </>
    );
}