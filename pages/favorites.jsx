import { Layout, EmptyFavorites, FavoritesGrid } from "../components";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favoritesList } = useSelector(({ favorites }) => favorites);

  return (
    <Layout title="Favoritos">
      <h1>Videos favoritos</h1>
      {favoritesList.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FavoritesGrid favoritesList={favoritesList} />
      )}
    </Layout>
  );
};

export default Favorites;
