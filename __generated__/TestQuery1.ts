/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TestQuery1
// ====================================================

export interface TestQuery1_me {
  __typename: "User";
  name: string | null;
}

export interface TestQuery1_upvoted {
  __typename: "Post";
  id: number | null;
}

export interface TestQuery1 {
  me: TestQuery1_me | null;
  upvoted: (TestQuery1_upvoted | null)[] | null;
}
