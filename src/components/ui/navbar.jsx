import { FaBars } from "react-icons/fa";
import ThemeToggle from "@/components/ui/theme-toggle-button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className="drawer-button btn btn-ghost text-xl cursor-pointer"
        >
          <FaBars />
        </label>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          Project Q
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeToggle className="text-xl mx-4 mt-2" />
        <div className="flex items-center space-x-4 pr-4">
          <Link href="/login" className="btn-success btn btn-sm">
            Login
          </Link>
          <Link href="/register" className="btn-error btn btn-sm">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
