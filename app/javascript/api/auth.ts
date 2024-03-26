import { currentUser } from "../context";
import {
  getHeaders,
  handleResponse,
  handleError,
  handleAuthResponse,
} from "../util/user";
import { UserSignUpRequest, UserSignInRequest } from "../types";

export const getCurrentUser = async () => {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) return null;
  await fetch("http://localhost:3000/current_user", {
    method: "GET",
    headers: getHeaders(jwt),
  })
    .then(async (response) => await handleResponse(response, currentUser))
    .catch((error) => handleError(error, currentUser));
};

export const SignUpUser = async (user: UserSignUpRequest) => {
  await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      user,
    }),
  }).then(async (response) => await handleAuthResponse(response, currentUser));
};

export const SignInUser = async (user: UserSignInRequest) => {
  await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      user,
    }),
  }).then(async (response) => await handleAuthResponse(response, currentUser));
};

export const SignOutUser: () => Promise<boolean> = async () => {
  const jwt = localStorage.getItem("jwt");
  console.log("Logging out...", jwt);
  const response = await fetch("http://localhost:3000/logout", {
    method: "DELETE",
    headers: getHeaders(jwt),
  });
  if (response.ok) localStorage.removeItem("jwt");
  return response.ok;
};
