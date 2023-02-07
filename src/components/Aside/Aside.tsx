import React from "react";
import { UserAddress } from "../../types/types.ts/types";

interface AsideProps {
  userAdress: Omit<UserAddress, "geo">;
}

export const Aside = ({
  userAdress: { street, suite, city, zipcode },
}: AsideProps) => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <span>{street}</span>
      <p>{suite}</p>
      <p>{city}</p>
      <span>{zipcode}</span>
    </div>
  );
};
