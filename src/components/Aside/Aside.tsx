import React from "react";
import { UserAddress } from "../../types/types.ts/types";

interface AsideProps {
  userAdress: UserAddress;
}

type AsideAdressProps = Omit<AsideProps, "geo">;

export const Aside = ({
  userAdress: { street, suite, city, zipcode },
}: AsideAdressProps) => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <span>{street}</span>
      <p>{suite}</p>
      <p>{city}</p>
      <span>{zipcode}</span>
    </div>
  );
};
