import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useGetPostsQuery } from "../../generated/graphql";
import Logout from "../auth/Logout";

const Home = ({ user }) => {
  const { data, loading, error } = useGetPostsQuery();
  console.log("user:", user);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <Logout />
      {data?.posts.map(({ id, title, notes, mediaType }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{mediaType}</p>
          <p>{notes}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
