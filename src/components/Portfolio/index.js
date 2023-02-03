import { motion } from "framer-motion";
import { useState } from 'react'
import BatmanS from '../../assets/images/batman.jpg'
import Pic2 from '../../assets/images/example2.jpg'
import QnaS from '../../assets/images/qna.jpg'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const projectsData = [
  {
    id: 1,
    name: "QNA",
    img: QnaS,
    link: "https://ma-qna.herokuapp.com/",
  },
  {
    id: 3,
    name: "MOVIE BOX",
    img: BatmanS,
    link: "https://trietryannguyen.github.io/project-group-1/",
  },
  {
    id: 5,
    name: "WORK DAY PLANNER",
    img: Pic2,
    link: "https://michaelauricht.github.io/Work-Day-Planner/",
  },
];

const Portfolio = () => {

  const [letterClass] = useState('text-animate')

  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <div className="projects">
      <div className="projects-heading">
      <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k', '.',]} 
                    idx={15}
                    />
                </h1>
        <div className="bottom-line"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={item.id}
            onClick={() => handleClick(item.link)}
          >
            <img src={item.img} alt="#" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio
