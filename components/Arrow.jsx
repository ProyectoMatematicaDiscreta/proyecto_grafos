import { motion } from "framer-motion";
import styleGrafos from '../styles/Grafos.module.css';

export default function Arrow(props) {
  return (
    <motion.svg
      id={styleGrafos.Arrow}
      drag
      dragConstraints={{ left: -1, right: 1120, top: 0, bottom: 570 }}
      dragMomentum={false}
      xmlns="http://www.w3.org/2000/svg"
      width={84.301}
      height={22.737}
      {...props}
    >
      <g data-name="Grupo 1">
        <path
          data-name="Trazado 1"
          d="m0 7.294 61.95.414V0L84.3 12.097l-22.35 10.64v-7.922H0Z"
        />
      </g>
    </motion.svg>
  )

};
