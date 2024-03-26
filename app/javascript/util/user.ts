import { User } from "../generated/graphql";

const getHeaders = (jwt: string = "") => {
  return {
    "Content-Type": "application/json",
    "X-CSRF-Token": (
      document.querySelector("[name='csrf-token']") as HTMLMetaElement
    )?.content,
    Authorization: jwt,
  };
};

const handleResponse = async (
  response: Response,
  currentUser: (user: User | null) => void
) => {
  if (!response.ok) throw new Error("Network response was not ok.");
  const data = await response.json();
  currentUser(data);
};

const handleError = (
  error: Error,
  currentUser: (user: User | null) => void
) => {
  console.error(error);
  currentUser(null);
  localStorage.removeItem("jwt");
};

const handleAuthResponse = async (
  response: Response,
  currentUser: (user: User | null) => void
) => {
  const data = await response.json();
  if (!response.ok) {
    alert(data.status.message);
    return;
  }
  const token = response.headers.get("Authorization");
  localStorage.setItem("jwt", token);
  currentUser(data);
};

export { getHeaders, handleResponse, handleError, handleAuthResponse };
