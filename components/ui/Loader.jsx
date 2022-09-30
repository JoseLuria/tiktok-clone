import { ErrorIcon } from "../../icons";

export const Loader = ({ error, isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loader">
          {error ? (
            <ErrorIcon className="empty-icon" />
          ) : (
            <span className="loader-load"></span>
          )}
          <p className="loader-text">
            {error
              ? "Sucedió un error al cargar la información"
              : "Estamos cargando los datos"}
          </p>
        </div>
      )}
    </>
  );
};
