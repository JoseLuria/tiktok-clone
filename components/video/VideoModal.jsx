import { motion } from "framer-motion";
import { CloseIcon } from "../../icons";
import { modalContentVariants, modalVariants } from "../animations";

export const VideoModal = ({ title, tags, description, closeModal }) => {
  return (
    <motion.div
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={closeModal}
      className="video-modal"
    >
      <motion.section
        variants={modalContentVariants}
        onClick={(e) => e.stopPropagation()}
        className="video-modal-box"
      >
        <button onClick={closeModal} className="modal-button">
          <CloseIcon />
        </button>
        <p className="modal-title">{title}</p>
        <span className="modal-tags">
          {tags.map((tag, index) => (
            <span className="tag-element" key={index}>{`#${tag}`}</span>
          ))}
        </span>
        <p>{description}</p>
      </motion.section>
    </motion.div>
  );
};
