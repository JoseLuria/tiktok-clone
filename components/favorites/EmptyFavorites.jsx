import { ErrorIcon } from "../../icons";

export const EmptyFavorites = () => {
  return (
    <div className="empty-favorites">
      <ErrorIcon className="empty-icon" />
      <p>Al parecer no hay videos favoritos</p>
    </div>
  );
};
