import { registerQueryResolver } from "../helpers";

registerQueryResolver<"me">("me", async (_parent, _params, context) => {
  if (context.req.isAuthenticated()) {
    // https://github.com/DefinitelyTyped/DefinitelyTyped/commit/91c229dbdb653dbf0da91992f525905893cbeb91#comments
    const { name, id } = context.req.user as any;

    return {
      id,
      name
    };
  }
});
