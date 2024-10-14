import Link from "next/link";

function NavbarLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={`#${href}`}
      className="hover:shadow-[0_2px_0_0_#AFCC81] px-3 py-1"
    >
      <h1>{text}</h1>
    </Link>
  );
}
export default NavbarLink;
