'use client'
import Link from "next/link";
import { dataHeaderCategoryCard } from "@/data/dataHeaderCategoryCard";

const HeaderCard = () => {
  const dataCard = dataHeaderCategoryCard;
  return (
    <div className=" p-4 px-6 sm:px-10 md:px-14 lg:px-20 flex items-center ">
      <div>
        <p className="text-xl font-semibold mb-2 text-center text-[#FB2576] ">Tecnologias</p>
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

const Card = (props) => {
    const { title, subtitle, Icon, href, IconColor, bgGradientFrom, bgGradientTo } = props;
  return (
    <Link
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-${bgGradientFrom} to-${bgGradientTo} translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300`}
      />

      <Icon
        className={`absolute z-10 -top-12 -right-12 text-9xl text-${IconColor} group-hover:text-white group-hover:rotate-12 transition-transform duration-300`}
      />
      <Icon
        className={`mb-2 text-2xl text-${IconColor} group-hover:text-white transition-colors relative z-10 duration-300`}
      />

      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-300 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </Link>
  );
};

export default HeaderCard;
