export class AppError extends Error {
  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
  }
}

export const invalidMethod = () => {
  throw new AppError(400, "Invalid Method");
};

export const catchError = (fn) => {
  return async (req, res) => {
    return fn(req, res).catch((error) =>
      res.status(error.code ? error.code : 500).json({ message: error.message })
    );
  };
};
