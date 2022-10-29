function handlerChain(...fns) {
  return async (req, res) => {
    for (const fn of fns) {
      const data = await fn(req, res);
      if (data !== undefined) {
        return data;
      }
    }
  };
}

export default handlerChain