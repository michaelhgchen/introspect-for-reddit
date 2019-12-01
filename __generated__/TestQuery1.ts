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
  author: string;
  created_utc: string;
  domain: string;
  id: string;
  is_self: boolean;
  is_video: boolean;
  num_comments: number;
  over_18: boolean;
  permalink: string;
  score: string;
  subreddit: string;
  thumbnail: string | null;
  thumbnail_height: number | null;
  thumbnail_width: number | null;
  title: string;
  url: string;
}

export interface TestQuery1 {
  me: TestQuery1_me | null;
  upvoted: (TestQuery1_upvoted | null)[] | null;
}
