import React from "react";
import search from "../assets/svgs/search.svg";
import showcase from "../assets/imgs/showcase.png";

function Showcase() {
  return (
    <>
      {/* showcase started */}
      <section className="showcase mt-[50px]">
        <div className="container">
          <div className="showcase_top flex items-center justify-between">
            <div className="showcase_links flex items-center gap-[30px]">
              <p className="font-[400] text-[16px] hover:text-[#a6331c]">
                {" "}
                Плитка, керамогранит и мозаика
              </p>
              <p className="font-[400] text-[16px] hover:text-[#a6331c]">
                Мебель
              </p>
              <p className="font-[400] text-[16px] hover:text-[#a6331c]">
                Мебельная фурнитура и комплектующие
              </p>
              <p className="font-[400] text-[16px] hover:text-[#a6331c]">
                Товары для дома
              </p>
              <p className="font-[400] text-[16px] hover:text-[#a6331c]">
                Акции
              </p>
            </div>
            <div className="search flex items-center justify-between rounded-[4px] border border-[#d0cece] p-[10px]">
              <input
                placeholder="Белый стул"
                type="search"
                className="border-none outline-none"
              />
              <img src={search} alt="" />
            </div>
          </div>

          <img className="mt-[40px]" src={showcase} alt="" />
        </div>
      
      </section>
      {/* showcase ended */}
    </>
  );
}
export default Showcase;
