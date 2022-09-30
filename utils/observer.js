const isServer = typeof window === "undefined";

export const autoPlayVideoObserver = () => {
  if (isServer) return;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    },
    {
      root: document.querySelector(".feed-main"),
      rootMargin: "0px",
      threshold: 0.8,
    }
  );
};
