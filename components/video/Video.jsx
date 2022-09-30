import { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { VideoModal } from "..";
import { AboutIcon, FavoriteIcon } from "../../icons";
import { useModal } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux";

export const Video = (props) => {
  const { videoUrl, title, tags, observer, _id } = props;
  const { isVisible, showModal } = useModal();
  const { favoritesList } = useSelector(({ favorites }) => favorites);
  const isFavorite = favoritesList.find((video) => video._id === _id);

  const ref = useRef();
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(addFavorite({ videoUrl, title, _id }));

  const handleRemove = () => dispatch(removeFavorite(_id));

  useEffect(() => {
    observer.observe(ref.current);
  }, [observer]);

  return (
    <section className="video">
      <div className="video-player">
        <video
          ref={ref}
          src={videoUrl}
          className="video-media"
          muted
          controls={false}
          loop
        />
        <div className="video-elements">
          <span className="video-buttons">
            <button onClick={isFavorite ? handleRemove : handleAdd}>
              <FavoriteIcon
                className={`icon-transition ${isFavorite && "red-icon"}`}
              />
            </button>
            <button onClick={showModal}>
              <AboutIcon />
            </button>
          </span>
          <span className="video-info">
            <p className="video-title">{title}</p>
            <span className="video-tags">
              {tags.map((tag, index) => (
                <p key={index}>{`#${tag}`}</p>
              ))}
            </span>
          </span>
        </div>
        <AnimatePresence>
          {isVisible && <VideoModal {...props} closeModal={showModal} />}
        </AnimatePresence>
      </div>
    </section>
  );
};
