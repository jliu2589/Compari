import Layout from "src/components/Layout";
import Compare from "src/components/Compare";
import { trpc } from "../utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Compare />
      <p>{hello.data.greeting}</p>
    </Layout>
  );
}
