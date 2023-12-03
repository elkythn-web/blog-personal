"use client";
import { useState } from "react";
import HeaderCard from "./HeaderCard";
import BubbleText from "@/anim/BubbleText";
import { Barlow_Condensed } from "next/font/google";

export const barlow_condensed = Barlow_Condensed({ weight: ["100", "500", "900"], subsets: ['latin'] });

const Header = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError(true);
      return;
    }

    setError(false);
    setEmail("");
  };

  return (
    <header>
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className={`${barlow_condensed.className} w-auto`}>
                  <div className=" font-thin ">
                  <BubbleText />
                  </div>
                </div>
                <p className="max-w-[600px] text-zinc-200 mx-auto">
                  Nos apaciona la tecnología y queremos compartir contigo todo
                  lo que sabemos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mx-auto">
                <form className="flex space-x-2" onClick={handleSubmit}>
                  <input
                    className="max-w-lg flex-1 bg-gray-800 py-2 px-3 rounded-lg text-white border-gray-900"
                    placeholder="Correo electrónico"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="bg-[#FB2576] text-black py-2 px-5 rounded-lg cursor-pointer hover:bg-[#ce0843] "
                    type="submit"
                  >
                    Unirte
                  </button>
                </form>
                <p className="text-xs text-zinc-200 ">
                  Unite a nuestra comunidad y recibe las últimas noticias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
