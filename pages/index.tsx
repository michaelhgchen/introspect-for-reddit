import React from "react";
import Button from "@material-ui/core/Button";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";

import { TestQuery1 } from "../__generated__/TestQuery1";
import { withApollo } from "../lib/withApollo";

const TEST_QUERY_1 = gql`
  query TestQuery1 {
    upvoted {
      id
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

  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Link href="/page2">
        <a>Test preload baby</a>
      </Link>
    </div>
  );
};

export default withApollo(Home, { ssr: false });
