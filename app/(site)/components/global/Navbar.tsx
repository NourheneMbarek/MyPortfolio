import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-200 dark:border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-6">
            <li>
              <Link
                href="/#experience"
                className="hover:text-purple-500 duration-300"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="hover:text-purple-500 duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#certifications"
                className="hover:text-purple-500 duration-300"
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-purple-500 duration-300"
              >
                Contact
              </Link>
            </li>

            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}