import React from "react";
import Button from "@material-ui/core/Button";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";

import { TestQuery1 } from "../__generated__/TestQuery1";
import { withApollo } from "../lib/withApollo";

// TODO: split queries, add batching
const TEST_QUERY_1 = gql`
  query TestQuery1 {
    me {
      name
    }
    upvoted {
      author
      created_utc
      domain
      id
      is_self
      is_video
      num_comments
      over_18
      permalink
      score
      subreddit
      thumbnail
      thumbnail_height
      thumbnail_width
      title
      url
    }
  }
`;

const Home = () => {
  const { loading, data, error } = useQuery<TestQuery1>(TEST_QUERY_1);

  if (loading) {
    return "loading";
  } else if (error) {
    return "error";
  }

  const { me, upvoted } = data;

  return (
    <div>
      <a href={me ? "/logout" : "/login"}>
        <Button variant="contained" color="primary">
          {me ? "Logout" : "Login"}
        </Button>
      </a>
      {me && <div>Logged in as {me.name}</div>}

      <Link href="/about">
        <a>About</a>
      </Link>

      {upvoted && <div>{JSON.stringify(upvoted)}</div>}
    </div>
  );
};

export default withApollo(Home, { ssr: false });
