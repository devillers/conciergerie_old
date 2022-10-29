function withReturnToJson(handlerFn) {
  return async (req, res) => {
    const data = await handlerFn(req, res);
    res.send(data);
  };
}

export default withReturnToJson;
