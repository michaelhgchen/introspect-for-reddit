import { registerQueryResolver } from "../helpers";

registerQueryResolver<"saved">("saved", async (_parent, _params, _context) => {
  return [{ id: 2 }];
});
