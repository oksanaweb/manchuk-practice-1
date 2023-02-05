import React from "react";
import { UserMap } from "../UserMap/UserMap";
import { User, UserAddress } from "../../types/types.ts/types";
import { UserGeo } from "../../types/types.ts/types";

interface GeoProps {
  userInfoGeo: UserAddress;
}

export const Main = ({ userInfoGeo: { geo } }: GeoProps) => {
  return (
    <div>
      <UserMap userInfoGeo={geo} />
    </div>
  );
};
