import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faGithub, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <>
            <motion.div
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}

            className="logo_technologies">
                <h1>Technologies</h1>
            </motion.div>
            <div className="all_icon_technologies">

                <motion.div
                animate={{y:[10,-20]}}
                transition={{duration:2, repeat:Infinity, ease:"linear",repeatType:"reverse"}}
                ><FontAwesomeIcon className="icon_technologies_react" icon={faReact} /></motion.div>
                <motion.div
                animate={{y:[10,-20]}}
                transition={{duration:3, repeat:Infinity, ease:"linear",repeatType:"reverse"}}
                ><FontAwesomeIcon className="icon_technologies" icon={faGithub} /></motion.div>
                <motion.div
                animate={{y:[10,-20]}}
                transition={{duration:4.5, repeat:Infinity, ease:"linear",repeatType:"reverse"}}
                ><FontAwesomeIcon className="icon_technologies_js" icon={faJs} /></motion.div>
                <motion.div
                animate={{y:[10,-20]}}
                transition={{duration:1.5, repeat:Infinity, ease:"linear",repeatType:"reverse"}}
                ><FontAwesomeIcon className="icon_technologies_css" icon={faCss3} /></motion.div>
            </div>
        <hr className="hr_technologies"/>
        </>
    );
}