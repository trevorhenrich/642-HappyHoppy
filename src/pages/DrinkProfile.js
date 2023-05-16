import React from "react";
import { useParams } from "react-router-dom";

export function DrinkProfile() {
  const {id} = useParams();
  const {name} = useParams();
  return <>Cocktail Name: {name} ID: {id} </>;
}

export default DrinkProfile;
