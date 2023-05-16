import React from "react";
import { useParams } from "react-router-dom";
import DrinksHeader from "../components/drinksheader";

export function DrinkProfile() {
  const {id} = useParams();
  const {name} = useParams();
  return <>
  <DrinksHeader/>
  Cocktail Name: {name} ID: {id} 
  </>;
}

export default DrinkProfile;
