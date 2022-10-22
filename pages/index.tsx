import Layout from "@/components/Layout";
import Compare from "@/components/Compare";
import { PokemonClient } from "pokenode-ts";

export async function getServerSideProps() {
  const api = new PokemonClient();
  const pokemon1 = await api.getPokemonById(1);
  return {
    props: { pokemon1 },
  };
}

export default function Home({ pokemon1 }) {
  console.log(pokemon1);
  return (
    <Layout>
      <Compare />
    </Layout>
  );
}
