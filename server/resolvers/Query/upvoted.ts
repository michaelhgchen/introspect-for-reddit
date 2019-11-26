import { registerQueryResolver } from "../helpers";

registerQueryResolver<"upvoted">(
  "upvoted",
  async (_parent, _params, _context) => {
    return [{ id: 1 }];
  }
);
