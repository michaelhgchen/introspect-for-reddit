import { registerMutationResolver } from "../helpers";

registerMutationResolver<"test">(
  "test",
  async (_parent, _params, _context) => {
    return true;
  }
);
