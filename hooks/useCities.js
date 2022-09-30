import { useState, useEffect, useRef } from "react";

export const useCities = () => {
  const [videoCities, setVideoCities] = useState([]);
  const [error, setError] = useState(false);
  const ref = useRef();

  const handleGetCity = async () => {
    setError(false);
    try {
      const response = await fetch("/api/cities");
      const cities = await response.json();
      setVideoCities(cities);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    handleGetCity();
  }, []);

  useEffect(() => {
    const lastObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVideoCities((videoCities) => [...videoCities, ...videoCities]);
          entry.target.scrollIntoView();
        }
      },
      {
        root: document.querySelector(".feed-main"),
        rootMargin: "100px",
        threshold: 0.5,
      }
    );
    lastObserver.observe(ref.current);
  }, []);

  return {
    videoCities,
    ref,
    error,
    isLoading: videoCities.length === 0 && !error,
  };
};
