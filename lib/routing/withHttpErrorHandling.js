import HttpError from "../HttpError";

function withHttpErrorHandling(handlerFn) {
  return async (req, res) => {
    try {
      await handlerFn(req, res);
    } catch (err) {
      if (err instanceof HttpError) {
        res.status(err.code);
        res.json(err);
        return;
      }
      throw err;
    }
  };
}

export default withHttpErrorHandling;
