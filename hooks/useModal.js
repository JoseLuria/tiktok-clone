import { useState, useEffect } from "react";

export const useModal = () => {
  const [isVisible, setShowElement] = useState(false);

  const showModal = () => setShowElement(!isVisible);

  useEffect(() => {
    if (isVisible) {
      document.querySelector(".feed-main").classList.add("no-scroll");
    } else {
      document.querySelector(".feed-main").classList.remove("no-scroll");
    }
  }, [isVisible]);

  return {
    isVisible,
    showModal,
  };
};
