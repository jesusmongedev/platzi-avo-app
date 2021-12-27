import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" prefetch={false}>       
            <a >Home</a>
          </Link>
        </li>
        <li>
            <Link href="/about" prefetch={false}>
                <a>About</a>
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
