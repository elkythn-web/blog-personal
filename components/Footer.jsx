import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataFooter } from "@/data/dataFooter";

const Footer = () => {
  const links = dataFooter;

  return (
    <footer className="p-4 md:p-8 lg:p-10 text-white ">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-white"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap text-[#FB2576]  ">
            ELKYTHN<span className=" text-white ">.</span>
            <span className=" text-[#FB2576] ">BLOG</span>
          </span>
        </Link>
        <p className="my-3 text-gray-500 ">
          Blog Personal hecho para compartir conocimientos y experiencias en el
          mundo de la programación.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-2 text-gray-900 \">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.link}
                className="mr-4 hover:underline md:mr-6 text-[#FB2576] "
              >
                <FontAwesomeIcon icon={link.icon} size="2xl" />
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Hecho con ❤️ por Elkin Portillo
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
