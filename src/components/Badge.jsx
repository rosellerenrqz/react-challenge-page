import { motion } from "framer-motion";

const Badge = ({ caption }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.2 }}
      className="ml-2 rounded-md bg-blue-400 px-2 text-sm text-white"
    >
      {caption}
    </motion.div>
  );
};

export default Badge;
