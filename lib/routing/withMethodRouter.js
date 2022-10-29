import HttpError from "../HttpError";
import handlerChain from "./handlerChain";
import ensureArray from "../../utils/ensureArray";

const httpMethods = [
  "get",
  "post",
  "put",
  "delete",
  "patch",
  "options",
  "head",
];

function withMethodRouter(handlerObj) {
  const topLevelHandlers = ensureArray(handlerObj.all ?? []);

  return async (req, res) => {
    const method = req.method.toLowerCase();

    if (handlerObj[method] == null) {
      if (httpMethods.includes(method)) {
        throw new HttpError(405); // valid HTTP method, but not implemented for this ressource
      } else {
        throw new HttpError(501); // invalid HTTP method
      }
    }

    const chain = handlerChain(
      ...topLevelHandlers,
      ...ensureArray(handlerObj[method])
    );

    return chain(req, res);
  };
}

export default withMethodRouter;
