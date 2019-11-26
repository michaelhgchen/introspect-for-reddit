import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { TestQuery2 } from "../__generated__/TestQuery2";
import { withApollo } from "../lib/withApollo";

const TEST_QUERY_2 = gql`
  query TestQuery2 {
    saved {
      id
    }
  }
`;

const Page2 = () => {
  const { loading, data, error } = useQuery<TestQuery2>(TEST_QUERY_2);

  if (loading) {
    return "loading";
  } else if (error) {
    return "error";
  } else {
    console.log(data);
  }

  return (
    <div>
      <Head>
        <title>Page 2</title>
      </Head>
      Page 2 BABY
    </div>
  );
};

export default withApollo(Page2);
