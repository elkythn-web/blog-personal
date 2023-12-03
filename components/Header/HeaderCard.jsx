"use client";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import Card from "@/components/Header/Card";

export const dataHeaderCategoryCard = [
    {
        id: 1,
        title: "HTML",
        subtitle: "Todo lo que necesitas saber sobre HTML.",
        href: "#",
        Icon: AiOutlineHtml5,
        IconColor: "text-[#E44D26]",
        bgGradientFrom: "from-[#ff5757]",
        bgGradientTo: "to-[#ff5757]",
    },
    {
        id: 2,
        title: "CSS",
        subtitle: "Todo lo que necesitas saber sobre CSS.",
        href: "#",
        Icon: FaCss3,
        IconColor: "text-[#1572B6]",
        bgGradientFrom: "from-[#4d9aff]",
        bgGradientTo: "to-[#226ed3]",
    },
    {
        id: 3,
        title: "JavaScript",
        subtitle: "Todo lo que necesitas saber sobre JavaScript.",
        href: "#",
        Icon: DiJavascript,
        IconColor: "text-[#F7DF1E]",
        bgGradientFrom: "from-[#ceb817]",
        bgGradientTo: "to-[#e7d447]",
    },
    {
        id: 4,
        title: "React",
        subtitle: "Todo lo que necesitas saber sobre React.",
        href: "#",
        Icon: FaReact,
        IconColor: "text-[#61DBFB]",
        bgGradientFrom: "from-[#61DBFB]",
        bgGradientTo: "to-[#61DBFB]",
    },
];

const HeaderCard = () => {
  const dataCard = dataHeaderCategoryCard;
  return (
    <div className=" p-4 px-6 sm:px-10 md:px-14 lg:px-20 flex items-center justify-center ">
      <div>
        <p className="text-xl font-semibold mb-2 text-center text-[#FB2576] ">
          Tecnologias
        </p>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 items-start">
          {dataCard.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              Icon={card.Icon}
              href={card.href}
              IconColor={card.IconColor}
              bgGradientFrom={card.bgGradientFrom}
              bgGradientTo={card.bgGradientTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
