import { registerMutationResolver } from "../helpers";

registerMutationResolver<"logout">(
  "logout",
  async (_parent, _params, _context) => {
    return true;
  }
);
