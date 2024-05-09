const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Somthing went wrong..." });
};

export default errorHandlerMiddleware;
