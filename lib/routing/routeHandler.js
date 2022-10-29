import withHttpErrorHandling from "./withHttpErrorHandling";
import withMethodRouter from "./withMethodRouter";
import withReturnToJson from "./withReturnToJson";

function routeHandler(handlerObj) {
  return withHttpErrorHandling(withReturnToJson(withMethodRouter(handlerObj)));
}

export default routeHandler;
