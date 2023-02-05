import { type } from "os";
import React from "react";
import { UserGeo } from "../../types/types.ts/types";

interface UserMapProps {
  userInfoGeo: UserGeo;
}

export const UserMap = ({ userInfoGeo: { lat, lng } }: UserMapProps) => {
  return (
    <div>
      <div>{lat}</div>
      <h1>{lng}</h1>
    </div>
  );
};
