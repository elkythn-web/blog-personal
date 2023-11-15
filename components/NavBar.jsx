"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { dataNavBar } from "@/data/dataNavBar";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const navBar = dataNavBar;

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap text-[#FB2576]  ">
            ELKYTHN<span className=" text-white ">.</span>
            <span className=" text-[#FB2576] ">BLOG</span>
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-black 
                    focus:outline-none focus:ring-2 focus:ring-[#FB2576] "
          aria-controls="navbar-default"
          aria-expanded={show ? "true" : "false"}
          onClick={handleShow}
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div
          className={`w-full md:w-auto md:block ${show ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border text-center border-[#FB2576] rounded-lg md:flex-row 
          md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 "
          >
            {navBar.map((navLink) => (
              <li key={navLink.id}>
                <Link
                  href={navLink.url}
                  className={`${
                    pathname === navLink.url
                      ? "text-[#FB2576] border-b-2 border-[#FB2576]"
                      : "border-black"
                  } 
                    block py-2 px-3 border-b-2  md:mx-2 hover:text-[#FB2576] hover:border-b-2 hover:border-[#FB2576]`}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className=" hidden md:block mx-20 border-[#FB2576]  " />
    </nav>
  );
};

export default NavBar;
