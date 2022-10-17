import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import react from "react";

function PageNotFound() {
  return (
    <Layout>
      <div>
        <h1>Uh Oh!</h1>
        <p>Page not Found.</p>
        <Link href="/">
          <a>return home</a>
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
