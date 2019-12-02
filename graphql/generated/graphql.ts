import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
  __typename?: 'Mutation',
  test?: Maybe<Scalars['Boolean']>,
};

export type Post = {
  __typename?: 'Post',
  author: Scalars['String'],
  created_utc: Scalars['String'],
  domain: Scalars['String'],
  id: Scalars['String'],
  is_self: Scalars['Boolean'],
  is_video: Scalars['Boolean'],
  num_comments: Scalars['Int'],
  over_18: Scalars['Boolean'],
  permalink: Scalars['String'],
  score: Scalars['String'],
  subreddit: Scalars['String'],
  thumbnail?: Maybe<Scalars['String']>,
  thumbnail_height?: Maybe<Scalars['Int']>,
  thumbnail_width?: Maybe<Scalars['Int']>,
  title: Scalars['String'],
  url: Scalars['String'],
};

export type Query = {
  __typename?: 'Query',
  me?: Maybe<User>,
  saved?: Maybe<Array<Maybe<Post>>>,
  upvoted?: Maybe<Array<Maybe<Post>>>,
};

export type User = {
  __typename?: 'User',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};



export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {},
  User: User,
  String: Scalars['String'],
  Post: Post,
  Boolean: Scalars['Boolean'],
  Int: Scalars['Int'],
  Mutation: {},
};

export type MutationResolvers<ContextType = any, ParentType = ResolversTypes['Mutation']> = {
  test?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type PostResolvers<ContextType = any, ParentType = ResolversTypes['Post']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  created_utc?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  is_self?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  is_video?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  num_comments?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  over_18?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  permalink?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  score?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  subreddit?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  thumbnail_height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  thumbnail_width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType = ResolversTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  saved?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>,
  upvoted?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType = ResolversTypes['User']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
