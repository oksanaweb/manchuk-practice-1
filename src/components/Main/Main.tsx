import React from "react";
import { UserMap } from "../UserMap/UserMap";
import { User, UserAddress } from "../../types/types.ts/types";
import { UserGeo } from "../../types/types.ts/types";

interface GeoProps {
  userInfoGeo: UserGeo;
}

export const Main = ({ userInfoGeo }: GeoProps) => {
  return (
    <div>
      <UserMap userInfoGeo={userInfoGeo} />
    </div>
  );
};
