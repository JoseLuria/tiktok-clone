import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../redux";

export const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.favorites) {
      const favorites = JSON.parse(localStorage.favorites);
      dispatch(setFavorites(favorites));
    } else {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  });

  return <>{children}</>;
};
