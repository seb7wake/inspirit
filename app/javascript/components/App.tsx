import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // Adjust the import path as necessary
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import CreatePost from "./pages/CreatePost";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useReactiveVar } from "@apollo/client";
import { currentUser } from "../context";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  const user = useReactiveVar(currentUser);
  console.log(user);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/create" element={<CreatePost user={user} />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
