import Link from "next/link";
import { ThemeToggle } from "../actions";
import { Heading } from "../ui/heading";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-3">
      <Link href={"/"}>
        <Heading size={"h3"}>SLEMEK</Heading>
      </Link>
      <div className="flex items-center gap-5">
        <ThemeToggle />
      </div>
    </header>
  );
};
