import { useState } from "react";

const [cars, setCars] = useState < t > [];

export async function getServerSideProps() {
  const res = await fetch(
    "https://private-anon-dde7d9ff96-carsapi1.apiary-mock.com/cars"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
