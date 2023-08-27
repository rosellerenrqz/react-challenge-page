import { createPortal } from "react-dom";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"
      />
      <dialog
        open
        className="top-[20%] z-20 w-[30rem] max-w-[90%] rounded-md p-5"
      >
        <h2 className="text-center text-xl font-semibold">{title}</h2>
        {children}
      </dialog>
    </>,
    document.getElementById("modal"),
  );
}
