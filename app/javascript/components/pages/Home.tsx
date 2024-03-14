import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useGetPostsQuery } from "../../generated/graphql";

const Home = () => {
  const { data, loading, error } = useGetPostsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      test
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
