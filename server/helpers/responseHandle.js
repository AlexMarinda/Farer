class Respond {
    static response(res, statusCode, data, error = false, isSuccessMsg = false) {
      if (error) {
        return res.status(statusCode).json({
          status: statusCode,
          error: data
        });
      }
      // if is success message
      if (isSuccessMsg) {
        return res.status(statusCode).json({
          status: statusCode,
          message: data
        });
      }
       //return status code and data object
      return res.status(statusCode).json({
        status: statusCode,
        data
      });
    }
  }
  
  export default Respond;
  