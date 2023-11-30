import React, { useEffect } from "react";

const BubbleText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "#ffcbe3";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "#ffcbe3";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "#ffcbe3";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "100";
        this.style.color = "#FB2576";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "#FB2576";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "#FB2576";
        }
      });
    });
  }, []);

  return (
    <h1 className=" hover-text font-thin text-2xl sm:text-4xl xl:text-5xl/none text-[#FB2576] ">
      <Text>Todos sobre la tecnología los tenemos en un solo lugar.</Text>
    </h1>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default BubbleText;
