const successResponse = (res: any, data: any, message = "OK") => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res: any, status: number, message = "Error") => {
  return res.status(status).json({
    success: false,
    message,
  });
};

export { successResponse, errorResponse };
