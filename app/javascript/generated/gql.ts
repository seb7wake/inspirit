/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreatePost($title: String!, $notes: String!, $mediaType: String!, $author: ID!) {\n  createPost(\n    input: {title: $title, notes: $notes, mediaType: $mediaType, author: $author}\n  ) {\n    id\n    title\n    notes\n    mediaType\n    author {\n      id\n    }\n  }\n}": types.CreatePostDocument,
    "query GetPosts {\n  posts {\n    id\n    title\n    notes\n    mediaType\n    createdAt\n    author {\n      id\n      name\n      email\n    }\n  }\n}": types.GetPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePost($title: String!, $notes: String!, $mediaType: String!, $author: ID!) {\n  createPost(\n    input: {title: $title, notes: $notes, mediaType: $mediaType, author: $author}\n  ) {\n    id\n    title\n    notes\n    mediaType\n    author {\n      id\n    }\n  }\n}"): (typeof documents)["mutation CreatePost($title: String!, $notes: String!, $mediaType: String!, $author: ID!) {\n  createPost(\n    input: {title: $title, notes: $notes, mediaType: $mediaType, author: $author}\n  ) {\n    id\n    title\n    notes\n    mediaType\n    author {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPosts {\n  posts {\n    id\n    title\n    notes\n    mediaType\n    createdAt\n    author {\n      id\n      name\n      email\n    }\n  }\n}"): (typeof documents)["query GetPosts {\n  posts {\n    id\n    title\n    notes\n    mediaType\n    createdAt\n    author {\n      id\n      name\n      email\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;