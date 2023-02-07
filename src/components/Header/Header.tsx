import React from "react";
import { User } from "../../types/types.ts/types";

interface HeaderProps {
  userInfo: Pick<User, "name" | "email" | "username">;
}

export const Header = ({
  userInfo: { name, email, username },
}: HeaderProps) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>User Name: {username} </h2>
      <address>email: {email}</address>
    </div>
  );
};
