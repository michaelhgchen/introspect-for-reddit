import { registerMutationResolver } from "../helpers";

registerMutationResolver<"login">(
  "login",
  async (_parent, _params, _context) => {
    return true;
  }
);
