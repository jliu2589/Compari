import Layout from "@/components/Layout";
import Compare from "@/components/Compare";

export async function getServerSideProps() {
  const res = await fetch(
    "https://private-anon-dde7d9ff96-carsapi1.apiary-mock.com/cars/<car_id>",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <Compare />
    </Layout>
  );
}
