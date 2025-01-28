import React from "react";
import "./header.css";
import logo1 from "../assets/imgs/logo1.png";
import icon1 from "../assets/svgs/icon1.svg";
import icon2 from "../assets/svgs/icon2.svg";
import icon3 from "../assets/svgs/icon3.svg";


function Header() {
  return (
    <>
      {/* header top started */}
      <header className="p-[20px] border-b border-[#dddada]">
        <div className="container">
          <div className="top_part flex items-center justify-between">
            <div className="loc_and_num flex items-center gap-[30px]">
              <p className="font-[400] text-[12px] text-[#000]">
                Санкт-Петербург
              </p>
              <p>
                <a className="font-[400] text-[12px] text-[#000]" href="tel:">
                  8 800 700 40 24
                </a>
              </p>
            </div>
            <p className="font-[400] text-[12px] text-[#000]">
              Позвонить или написать
            </p>
            <div className="links_last flex items-center gap-[30px]">
              <p>
                <a className="text-[12px] font-[400] text-[#000]" href="#">
                  О нас
                </a>
              </p>
              <p>
                <a className="text-[12px] font-[400] text-[#000]" href="#">
                  Наши салоны
                </a>
              </p>
              <p>
                <a className="text-[12px] font-[400] text-[#000]" href="#">
                  Оплата и доставка
                </a>
              </p>
              <p>
                <a className="text-[12px] font-[400] text-[#000]" href="#">
                  Для бизнеса
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* header top ended */}

      {/* header botom started */}
      <section className="mt-[30px]">
        <div className="container flex items-center justify-between">
          {/* header bottom links */}
          <div className="flex items-center gap-[30px]">
            <p className="font-[400] text-[14px] text-[#000]"> Каталог</p>
            <p className="font-[400] text-[14px] text-[#000]">Комнаты</p>
            <p className="font-[400] text-[14px] text-[#000]">Дизайн-проекты</p>
            <p className="font-[400] text-[14px] text-[#000]">
              Мебель на заказ
            </p>
          </div>

          <img src={logo1} alt="" />
          {/* header bottom icons */}
          <div className="flex items-center gap-[30px]">
            <p className="font-[400] text-[14px] text-[#000]">Andrew Shapin</p>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />

          </div>
        </div>
      </section>
    </>
  );
}
export default Header;
