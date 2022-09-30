import { useRef } from "react";
import { useDispatch } from "react-redux";
import { FavoriteIcon } from "../../icons";
import { removeFavorite } from "../../redux";

export const FavoriteVideo = ({ _id, videoUrl, title }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeFavorite(_id));
  const ref = useRef();

  return (
    <div
      onMouseOver={() => ref.current.play()}
      onMouseLeave={() => ref.current.pause()}
      key={_id}
      className="video-favorite"
    >
      <video
        ref={ref}
        src={videoUrl}
        className="video-favorite-media"
        muted
        controls={false}
        loop
      />
      <div className="video-favorite-elements">
        <button onClick={handleRemove}>
          <FavoriteIcon className="red-icon" />
        </button>
        <p className="video-favorite-title">{title}</p>
      </div>
    </div>
  );
};
