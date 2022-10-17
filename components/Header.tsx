import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex">
      <div>
        <Link href="/">
          <a>Compari</a>
        </Link>
      </div>
      <nav>
        <Link href="/account">
          <ul>Account</ul>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
