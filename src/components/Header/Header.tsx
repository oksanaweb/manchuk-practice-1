import React from "react";

interface HeaderProps {
  name: string;
  userName: string;
  email: string;
}

export const Header = ({ userName, email, name }: HeaderProps) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>User Name: {userName} </h2>
      <address>email: {email}</address>
    </div>
  );
};
