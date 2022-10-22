import { useState } from "react";
import { PokemonClient } from "pokenode-ts";

export async function getServerSideProps() {
  const api = new PokemonClient();
  const pokemon1 = await api.getPokemonById(1);
  const pokemon2 = await api.getPokemonById(1);
  return {
    props: { pokemon1, pokemon2 },
  };
}
