import React from "react";
import { useParams } from "react-router-dom";

export function DrinkProfile() {
  const {id} = useParams();
  return <>{id}</>;
}

export default DrinkProfile;
