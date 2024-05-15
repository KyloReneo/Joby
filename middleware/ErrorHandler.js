import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: "Something went wrong on the server side, please try again later...",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
  // res.status(defaultError.statusCode).json({ msg: err });
};

export default errorHandlerMiddleware;
