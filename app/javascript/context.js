import { makeVar } from "@apollo/client";

// Initialize with null or existing user data
export const currentUser = makeVar(null);
