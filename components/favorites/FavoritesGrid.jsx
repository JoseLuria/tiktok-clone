import { FavoriteVideo } from "..";

export const FavoritesGrid = ({ favoritesList }) => {
  return (
    <div className="favorites-grid">
      {favoritesList.map((props) => (
        <FavoriteVideo key={props._id} {...props} />
      ))}
    </div>
  );
};
