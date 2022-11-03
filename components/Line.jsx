import { motion } from "framer-motion";
export default function Line(props) {
  return (
    <motion.svg drag
      dragConstraints={{ left: 0, right: 1400 }}
      dragMomentum={false} xmlns="http://www.w3.org/2000/svg" width="66" height="6" viewBox="0 0 66 6" className="ml-3 mt-6">
      <rect id="Rectángulo_1" data-name="Rectángulo 1" width="66" height="6" />
    </motion.svg>

  )
};
