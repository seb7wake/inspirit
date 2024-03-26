import { makeVar } from "@apollo/client";
import { User } from "./generated/graphql";

// Initialize with null or existing user data
export const currentUser = makeVar();
