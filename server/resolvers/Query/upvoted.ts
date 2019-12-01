import fetch from "isomorphic-unfetch";

import { registerQueryResolver } from "../helpers";

registerQueryResolver<"upvoted">(
  "upvoted",
  async (_parent, _params, context) => {
    if (context.req.isAuthenticated()) {
      // https://github.com/DefinitelyTyped/DefinitelyTyped/commit/91c229dbdb653dbf0da91992f525905893cbeb91#comments
      const { accessToken, name } = context.req.user as any;

      const params = new URLSearchParams({ limit: "25" });

      // TODO: look into streaming w/ after
      const response = await fetch(
        `https://oauth.reddit.com/user/${name}/upvoted.json?${params.toString()}`,
        {
          headers: {
            Authorization: `bearer ${accessToken}`
          }
        }
      );

      const { data } = await response.json();
      return data.children.map(child => child.data);
    }
  }
);
