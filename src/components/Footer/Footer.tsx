import React from "react";
import { UserCompany } from "../../types/types.ts/types";

interface FooterProps {
  userCompanyInfo: UserCompany;
}

export const Footer = ({
  userCompanyInfo: { bs, catchPhrase, name },
}: FooterProps) => {
  return (
    <div>
      <p>{bs}</p>
      <h5>{catchPhrase}</h5>
      <h6>{name}</h6>
    </div>
  );
};
