import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex p-5">
      <div className="flex-1 text-center">
        <Link href="/">
          <a>Compari</a>
        </Link>
      </div>
      <nav className="flex-1 text-center">
        <Link href="/account">
          <ul>Account</ul>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
