/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any };
};

/** Autogenerated input type of CreatePost */
export type CreatePostInput = {
  author: Scalars["ID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  mediaType: Scalars["String"]["input"];
  notes: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

/** Autogenerated input type of CreateUser */
export type CreateUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Post = {
  __typename?: "Post";
  author: User;
  createdAt: Scalars["ISO8601DateTime"]["output"];
  id: Scalars["ID"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  mediaType: Scalars["String"]["output"];
  notes: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["ISO8601DateTime"]["output"];
};

export type Query = {
  __typename?: "Query";
  post: Post;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryPostArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["ISO8601DateTime"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["ISO8601DateTime"]["output"];
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars["String"]["input"];
  notes: Scalars["String"]["input"];
  mediaType: Scalars["String"]["input"];
  author: Scalars["ID"]["input"];
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost?: {
    __typename?: "Post";
    id: string;
    title: string;
    notes: string;
    mediaType: string;
    author: { __typename?: "User"; id: string };
  } | null;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "Post";
    id: string;
    title: string;
    notes: string;
    mediaType: string;
    createdAt: any;
    author: {
      __typename?: "User";
      id: string;
      name?: string | null;
      email?: string | null;
    };
  }>;
};

export const CreatePostDocument = gql`
  mutation CreatePost(
    $title: String!
    $notes: String!
    $mediaType: String!
    $author: ID!
  ) {
    createPost(
      input: {
        title: $title
        notes: $notes
        mediaType: $mediaType
        author: $author
      }
    ) {
      id
      title
      notes
      mediaType
      author {
        id
      }
    }
  }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      notes: // value for 'notes'
 *      mediaType: // value for 'mediaType'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const GetPostsDocument = gql`
  query GetPosts {
    posts {
      id
      title
      notes
      mediaType
      createdAt
      author {
        id
        name
        email
      }
    }
  }
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export function useGetPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
export type GetPostsSuspenseQueryHookResult = ReturnType<
  typeof useGetPostsSuspenseQuery
>;
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>;
