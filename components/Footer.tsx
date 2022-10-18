import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="text-center mt-5">
      <p>Copyright &copy; Compari 2022</p>
      <Link href="/aboutus">
        <a>About us</a>
      </Link>
    </div>
  );
}

export default Footer;
