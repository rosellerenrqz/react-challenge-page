import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"
      />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: -200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.1 }}
        open
        className="top-[20%] z-20 w-[30rem] max-w-[90%] rounded-md p-5"
      >
        <h2 className="text-center text-xl font-semibold">{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal"),
  );
}
