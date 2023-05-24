import React from "react";
import { useParams } from "react-router-dom";
import DrinksHeader from "../components/drinksheader";
import TestComponent from "../components/test";

export function DrinkProfile() {
  const { id } = useParams();
  const { name } = useParams();
  return (
    <>
      <DrinksHeader />
      <TestComponent />
      Cocktail Name: {name} ID: {id}
    </>
  );
}

export default DrinkProfile;
