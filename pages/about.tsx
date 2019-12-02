import React from "react";
import Head from "next/head";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { withApollo } from "../lib/withApollo";

const TEST_QUERY_2 = gql`
  query TestQuery1 {
    me {
      name
    }
    saved {
      id
    }
  }
`;

const About = () => {
  const { loading, data, error } = useQuery(TEST_QUERY_2);

  if (loading) {
    return 'loading';
  }

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      TODO: add an about page
    </div>
  );
};

export default withApollo(About);
