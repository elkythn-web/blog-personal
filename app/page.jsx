import Header from "@/components/Header";
import DataCard from "@/components/DataCard";
import HeaderCard from "@/components/HeaderCard";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <Header />
        
      </div>
      <div>
      <HeaderCard />
      </div>
      <div className="flex justify-center items-center ">
        <DataCard />
      </div>
    </>
  );
};

export default Home;
