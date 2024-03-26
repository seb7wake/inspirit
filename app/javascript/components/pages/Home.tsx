import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useGetPostsQuery } from "../../generated/graphql";
import { useReactiveVar } from "@apollo/client";
import { currentUser } from "../../context";
import Header from "../header/Header";
import Post from "../Post";

const Home = () => {
  const { data, loading, error } = useGetPostsQuery();
  const user = useReactiveVar(currentUser);
  console.log("user:", user);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Header />
      <div className="bg-body-tertiary pt-3">
        <div className="w-50 mx-auto bg-body-tertiary">
          {data?.posts.map(({ id, title, notes, mediaType, author }) => (
            <Post
              key={id}
              id={id}
              author={author.name}
              title={title}
              notes={notes}
              mediaType={mediaType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
