import React from "react";
import icons from "../assets/imgs/footer.png";
import card from "../assets/imgs/card.png";

function Footer() {
  return (
    <>
      <footer className="footer mt-[40px] border-t border-[#d0cfcf] p-[20px]">
        <div className="container grid  grid-cols-4 gap-[30px]">
          {/* f1 */}
          <div className="f1 flex flex-col gap-[8px]">
            <a className="font-[400] *:text-[16px] text-[#000] " href="#">
              {" "}
              Каталог
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Акции
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Мебель
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Список комнат
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Товары для дома
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Фурнитура и комплектующие
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Плитка, керамогранит и мозаика
            </a>
          </div>
          {/* f2 */}
          <div className="f1 flex flex-col gap-[8px]">
            <a className="font-[400] *:text-[16px] text-[#000] " href="#">
              {" "}
              Каталог
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Акции
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Мебель
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Список комнат
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Товары для дома
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Фурнитура и комплектующие
            </a>
            <a className="font-[400] *:text-[14px] text-[#000]" href="#">
              Плитка, керамогранит и мозаика
            </a>
          </div>
          {/* f3 */}
          <div className="f3">
            <p>Контакты</p>
            <p>
              Единая справочная:Звонок по России бесплатный. Режим работы: с
              02:00 до 23:00 (МСК).
            </p>
            <p className="text-[20px] font-[400] text-[#000]">
              {" "}
              8 800 700 40 24{" "}
            </p>
            <img src={icons} alt="" />
          </div>
          {/* f4 */}
          <div className="f4 flex flex-col gap-[8px]">
            <p className="font-[400] text-[16px]">Принимаем к оплате</p>
            <img src={card} alt="" />
            <button className="font-[400] text-[14px] text-center border border-[#000] bg-[white] p-[10px] ">
              Написать нам
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
